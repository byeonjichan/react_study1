/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import { storage } from '../../configs/firebase/firebaseConfig';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Line } from 'rc-progress';
import { v4 as uuid } from "uuid"



const layout = css`
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const imageLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`;

function ImageEx(props) {
    const [ urls , seturls ] = useState([]); 
    const [ uploadFiles , setUPloadFiles ] = useState([]);
    const [ previews, setPreviews ] = useState ([]); 
    const [ progressPercents , setProgressPercents ] = useState([]);
    const imgFileRef = useRef();

    useEffect(()=>{
        seturls(!localStorage.getItem("urls") ? [] : JSON.parse(localStorage.getItem("urls")));
    }, []);
    
    const handleImgFileChange = (e) => {  
        let promises = [];
        const files = Array.from(e.target.files);
        if(e.target.files.length === 0) {
            imgFileRef.current.value = "";
            return;
        }
        setUPloadFiles(files);

        promises = files.map(file => new Promise((resolve) => {
            const fileReader = new FileReader(); 
            
            fileReader.onload = (e) => {
                resolve(e.target.result);
            }
            fileReader.readAsDataURL(file);
        })); 
        
        if(e.target.files.length === 0) {
            return;
        }
        // for (let file of e.target.files) {
        //     promises = [...promises , new Promise((resolve) => {
        //         const fileReader = new FileReader(); 
                
        //         fileReader.onload = (e) => {
        //             resolve(e.target.result);
        //         }
        //         fileReader.readAsDataURL(file);
        //     })];
        // } 위랑 같은코드

        Promise.all(promises)
        .then(result => {
            console.log(result)
            setPreviews(result);
        }) 
    }
    const handleImageUpload = () => {
        let promises = [];
        const file = uploadFiles[0];
        console.log(uploadFiles);
        const storageRef = ref(storage, `files/test/${uuid()}_${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef , file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                setProgressPercents(Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100))
            },
            (error) => {},
            () => {
                getDownloadURL(storageRef).then(url => {
                    localStorage.setItem("url",url);
                    seturls(url);
                    setPreviews([]);
                })
            }
        );
        
        Promise.all(promises)
        .then( urls => {
            localStorage.setItem(JSON.stringify)
            seturls(urls)
        }) 
    }
        
    return (
        <div css={layout}>
            {urls.map(url =>
                <div css={imageLayout}>
                <img src={url} alt="" />
            </div>
            )}
            {previews.map((preview , index) => 
                <>
                <div key={index} css={imageLayout}>
                    <img src={preview} alt="" />
                </div>
                <Line percent={progressPercents} strokeWidth={2} strokeColor={"#222222"}/>
                </>
            )}
            <input type="file" style={{display:"none"}} multiple={true} ref={imgFileRef} onChange={handleImgFileChange} />
            <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>
            <button onClick={handleImageUpload}>이미지 업로드</button>
        </div>
        
    );
}

export default ImageEx;