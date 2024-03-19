/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { HiMenu, HiUser } from "react-icons/hi";
import { menuState } from "../../atoms/menuAtom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { principalState } from "../../atoms/principalAtom";
import { useQueryClient } from "react-query";

function RootSideMenuLeft() {
    const [ show, setShow ] = useRecoilState(menuState);
    const [ isLogin , setLogin ] = useState(false);
    const [ principal , setPrincipal ] = useRecoilState(principalState)
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery")


    
    const handleCloseClick = () => {
        setShow(() => false);
    }

    useEffect(() => {
        setLogin(() => principalQueryState.status === "success")
    }, [principalQueryState.status])


    return (

        <div css={s.layout(show)}>
            <div css={s.header}>
                <button css={s.menuButton} onClick={handleCloseClick}>
                    <HiMenu />
                </button>
            </div>
            <div css={s.profile}>
            {
                !isLogin !== null
                ?  <>
                    <HiUser css={s.miniProfile} />
                    <img src="" alt="" css={s.imgBox}/>
                    <div>이름: {principal.name}</div>
                    <div>이메일: {principal.email}</div>
                </>
                :
            <div css={s.menuList}>
            </div>
            }
                </div>
            <div css={s.menuList}>
                <Link css={s.menuLink}>
                    도서 검색
                </Link>
            </div>
        </div>
    );
}

export default RootSideMenuLeft;