/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useState } from "react";

const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const imgLayout = css`
    box-sizing: border-box;
    display:flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;

function ImageEx3(props) {
    const fileInputRef = useRef(); //객체 들고올 때 ref
    const imageIdRef = useRef(0);
    const [ loadImages , setloadImages ]= useState([]);
    
    /**
     * {
     *  id : 1
     *  file: file객체,
     *  dataURL:""
     * }
     */

    const handleFileChange = (e) => {
        console.log(e.target.files);
        const { files } = e.target;
        const fileArray = Array.from(files);
        
        if(fileArray.length === 0) {
            return;
        }
        console.log(fileArray.map(file => file.name));
        let promises = [];
        
        promises = fileArray.map(file => new Promise(resolve => {
            console.log(file.name);
            const loadImage = {
                id : imageIdRef.current += 1,
                file,
                dataURL :""
            }
            const fileReader = new FileReader;
            fileReader.onload = (e) => {
                resolve({
                    ...loadImage,
                    dataURL : e.target.result
                });
            }

            fileReader.readAsDataURL(file);
        }));
        Promise.all(promises)
        .then(result => {
            setloadImages(result);
        })
    }

    return (
        <div css={layout}>
            {loadImages.map(loadImage => 
            <div css={imgLayout} key={loadImage.id}>
                <img src={loadImage.dataURL} alt={loadImage.file.name} />
            </div>)}
            
            <input type="file" style={{display:"none"}} multiple={true} ref={fileInputRef} onChange={handleFileChange}/>
            <button onClick={()=> fileInputRef.current.click()}>불러오기</button>
        </div>
    );
}

export default ImageEx3;