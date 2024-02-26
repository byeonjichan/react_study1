/** @jsxImportSource @emotion/react */

import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import * as S from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MENUS } from "../../constants/menu";

function SideBarTop(props) {

    const [isShow , setShow ] = useState(false);
    
    return (
        <aside css={S.layout(isShow)}>
            <button css={S.toggleButton} onClick={()=>setShow(!isShow)}>
              {isShow ? <FaCaretUp/> : <FaCaretDown/>}  
            </button>
            <ul css={S.menuList}>
                {MENUS.map(menu => <Link css={S.menuItem} to={menu.path} key={menu.id} onClick={() => setShow(false)}>                   
                <li>{menu.name}</li>
                </Link>)}          
            </ul>
        </aside>
    );
}

export default SideBarTop;