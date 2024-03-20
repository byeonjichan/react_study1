/** @jsxImportSource @emotion/react */
import { useMutation, useQueryClient } from "react-query";
import * as s from "./style";
import { sendAuthMailRequest } from "../../apis/api/sendAuthMail";
import FullsizeLoader from "../../components/FullSizeLoader/FullSizeLoader"
import { GoCheckCircle } from "react-icons/go";

function MyPage(props) {
    const queryClient = useQueryClient();
    const pricipalData = queryClient.getQueryData("principalQuery")

    const sendAuthMailMutation = useMutation({
        mutationKey: "sendAuthMailMutation",
        mutationFn: sendAuthMailRequest,
        retry: 0,
        onSuccess: (response) => {
            if(response.data) {
                alert("메일 전송을 완료하였습니다.")
            } else {
                alert("메일 전송이 실패하였습니다.")
            }
        }

    });

    const handleSendAuthMailClick = () => {
        sendAuthMailMutation.mutate();
    }

    return (
        <>
        {
            sendAuthMailMutation.isLoading 
            ? <FullsizeLoader />
            :
        <div css={s.layout}>
            <div css={s.header}>
                <div css={s.imgBox}>
                    <div css={s.profileImg}>
                        <img src="https://img1.daumcdn.net/thumb/S180x180/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fsports%2Fplayer%2F300%2F14%2F111505.jpg&scode=default_face_profile_big_p" alt="" />
                    </div>
                </div>
                <div css={s.infoBox}>
                    <div css={s.infoText}>사용자 이름: {pricipalData.data.username}</div>
                    <div css={s.infoText}>이름: {pricipalData.data.name}</div>
                    <div css={s.emailBox}>
                        <div css={s.infoText}>이메일: {pricipalData.data.email}</div>
                        {
                            pricipalData.data.authorities.filter(auth => auth.authority === "ROLE_USER").length === 0
                            ?
                            <button css={s.infoButton} onClick={handleSendAuthMailClick}>인증하기</button>
                            :
                            <div css={s.emailCheck}><GoCheckCircle /></div>
                        }
                    </div>
                    <div css={s.infoButtons}>
                        <button css={s.infoButton}>정보 수정</button>
                        <button css={s.infoButton}>비밀번호 수정</button>
                    </div>                   
                </div>
            </div>
            <div css={s.bottom}>

            </div>
        </div>
        }
        </>
    );
}

export default MyPage;