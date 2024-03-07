/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { useRef, useState } from "react";
function Mypage(props) {
    const imgFileRef = useRef();
    const [ preview, setPreview ] = useState (""); 

    const handleImgFileChange = (e) => {
        const fileReader = new FileReader();
        
        if(e.target.files.length === 0) {
            return;
        }
        console.log(e.target.files[0]);

        fileReader.onload = (e) => {
            setPreview(e.target.result);
        };

        fileReader.readAsDataURL(e.target.files[0]);
    }
    
    return (
        <div css={S.layout}>
            <div css={S.profileHeader}>
                <h1 css={S.title}>마이페이지</h1>
                <div css={S.profileImg} onClick={() => imgFileRef.current.click()}>
                    <img src={preview} alt="" />
                    <input style={{display : "none"}} type="file" multiple={true} ref={imgFileRef} onChange={handleImgFileChange}/>
            </div>           
                <div css={S.nicknameLayout}> 
                    <input css={S.nickname} type="text" maxLength={20} />
                </div>
            </div>
            <div css={S.profileInputLayout}>
                <div css={S.inputBox}>
                    <input css={S.profileInput} type="text" id="name" placeholder=" "/>
                    <label htmlFor="name">성명</label>
                </div>
                <div css={S.inputBox}>
                    <input css={S.profileInput} type="text" id="birth" placeholder=" "/>
                    <label htmlFor="birth">생년월일</label>
                </div>
                <div css={S.inputBox}>
                    <input css={S.profileInput} type="text" id="creditnumber" placeholder=" "/>
                    <label htmlFor="creditnumber">계좌번호</label>
                </div>
                <div css={S.inputBox}>
                    <input css={S.profileInput} type="text" id="password" placeholder=" "/>
                    <label htmlFor="password">비밀번호</label>
                </div>
            </div>
            <div css={S.buttonLayout}>
                <button css={S.profilebutton}>사기계좌조회</button>
            </div>
        </div>
    );
}

export default Mypage;