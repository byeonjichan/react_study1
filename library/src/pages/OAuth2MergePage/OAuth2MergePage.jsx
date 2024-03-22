/** @jsxImportSource @emotion/react */
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import RightTopButton from "../../components/RightTopButton/RightTopButton";
import { useInput } from "../../hooks/useInput";
import * as s from "./style";

function OAuth2MergePage(props) {
    const [ username, usernameChange ] = useInput();
    const [ password, passwordChange ] = useInput();


    const handleSigninSubmit = () => {

    }

    return (
        <>
            <div css={s.header}>
                <h2>계정 통합 로그인</h2>
                <RightTopButton onClick={handleSigninSubmit}>로그인 하기</RightTopButton>
            </div>
            <AuthPageInput type={"text"} name={"username"} placeholder={"사용자이름"} value={username} onChange={usernameChange}  />
            <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange} />
        </>
    );
}

export default OAuth2MergePage;