/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useState } from 'react';


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


function ImageEx() {
    const [ preview, setPreview ] = useState("");
    const fileImageRef = useRef();

    const handleImgFileChange = (e) => {
        const fileReader = new FileReader();

        if(e.target.files.length === 0) {
            return;
        }
        fileReader.onload = (e) => {
            setPreview(e.target.result);
        }
        fileReader.readAsDataURL(e.target.files[0]);
    }

    

    return (
       <div css={layout}>
        <div css={imgLayout}>
            <img src={preview} alt="" />
        </div>

        <input type="file" style={{display:"none"}} ref={fileImageRef} onChange={handleImgFileChange}/>
        <button onClick={() => fileImageRef.current.click()}>불러오기</button>
       </div>
    );
}

export default ImageEx;