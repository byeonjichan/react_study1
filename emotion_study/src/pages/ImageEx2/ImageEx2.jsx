/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { storage } from "../../configs/firebase/firebaseConfig";
import { Line } from "rc-progress";
import { v4 as uuid } from "uuid"

const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const imageLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`;
// [ ].map( ) - 치환 
//          매개 변수를 받을수 있고
// 	( ) 안에
// 	함수 정의가 들어간다 ( ) => { }
// map 배열함수로 배열로 리턴값이 나온다


//다른 사람 코드를 읽을 때 순서
// 1. 상태나 변수 선언
// 2. jsx
// 3.  

function ImageEx2() {
    const uploadFilesId = useRef(0); //업로드파일아이디를 자동증가 시키려고 선언 ref(0) <-인덱스로 사용
    const [ oldFiles, setOldFiles ] = useState([]); // 배열로 선언되있으므로 , 여러개가 들어갈것이다.
    const [ newFiles, setNewFiles ] = useState([]);
    const imgFileRef = useRef();

    useEffect(() => {
        setOldFiles(!localStorage.getItem("oldFiles") ? [] : JSON.parse(localStorage.getItem("oldFiles")));
    }, []); //새로 기존파일들을 가지고올때 비어있으면 빈배열 , 그렇지않으면 기존에 있는 올드파일을 제이슨형태로변환해서 넣어준다 셋올드파일스에

    const handleFileChange = (e) => { 
        console.log(e.target.files)
        const loadFiles = Array.from(e.target.files); //파일리스트안에 값을 배열의 자료형으로 옮겨 줘야함 그걸 자동으로 하는게 Array.from으로 변환

        if(loadFiles.length === 0) { // loadFiles 배열이된상태 map 사용가능 (아무것도 안들어왔으면) 취소버튼
            imgFileRef.current.value = ""; //밸류 비어주고 리턴
            return;
        }

        const uploadFiles = loadFiles.map(file => { //uploadFiles 파일객체들만 있다 / map을 사용한다는것은
            return { // 파일들을 하나씩 꺼내서 객체로 바꾼다
                id: uploadFilesId.current += 1,
                percent: 0,
                originFile: file,
                url: ""
            };
        });

        uploadFilesId.current = 0; //초기화

        // 동기를 비동기처리 할때 promise 사용
        
        let promises = []; 

        promises = uploadFiles.map(file => new Promise((resolve) => {
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                resolve(e.target.result);
            }
            fileReader.readAsDataURL(file.originFile);
        }));

        Promise.all(promises)
        .then(result => {
            setNewFiles(result.map((dataUrl, index) => {
                return {
                    ...uploadFiles[index],
                    preview: dataUrl
                };
            }));
        });        
    }

    const handleImageUpload = () => {
        const promises = newFiles.map(file => new Promise(resolve => {
            const storageRef = ref(storage, `files/test/${uuid()}_${file.originFile.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file.originFile);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    setNewFiles(newFiles.map(sFile => {
                        return sFile.id !== file.id ? sFile : {
                            ...sFile, 
                            percent: Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                        }
                    }));
                },
                (error) => {},
                () => {
                    getDownloadURL(storageRef).then(url => {
                        const newFile = {
                            ...file,
                            ["url"]: url
                        }
                        resolve(newFile);
                    })
                }
            );
        }));

        Promise.all(promises)
        .then((newFile) => {
            setOldFiles(newFile);
            localStorage.setItem("oldFiles", JSON.stringify(newFile));
        }).then(() => {
            setNewFiles([]);
        });
    }

    return (
        <div css={layout}>
            {oldFiles?.map(file => 
                <div key={file.id} css={imageLayout}>
                    <img src={file.url} alt="" />
                </div>
            )}
            {newFiles?.map(file => 
                <>
                    <div key={file.id} css={imageLayout}>
                        <img src={file.preview} alt="" />
                    </div>
                    <Line percent={file.percent} strokeWidth={4} strokeColor={"#dbdbdb"}/>
                </>
            )}
            
            <input style={{display: "none"}} type="file" multiple={true} ref={imgFileRef} onChange={handleFileChange}/>
            <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>
            <button onClick={handleImageUpload}>이미지 업로드</button>
        </div>
    ); 
}

export default ImageEx2;