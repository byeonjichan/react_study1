import { css } from "@emotion/react";

export const layout = (show) => css`
    transition: left 0.5s ease-in-out;
    opacity: ${show ? 1 : 0};
    position: absolute;
    left: ${show ? "0px" : "-200px"};
    top: 0;
    box-sizing: border-box;
    border-right:1px solid #dbdbdb;
    padding:15px 0px;
    width: 200px;
    height: 100%;
    background-color: #fafafa;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom:1px solid #dbdbdb ;
    padding: 0px 10px;
    width: 100%;
    height: 50px;

`;

export const menuButton = css`
    box-sizing: border-box;
    border: none;
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
    & > * {
        font-size: 16px;
    }
`;

export const profile = css`
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 150px;
`;

export const menuList = css`
    
`;

export const menuLink = css`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    height: 50px;
    background-color: #fdfdfd;
    font-size: 14px;
    text-decoration: none;
    color: #222222;
    font-weight: 600;
    padding: 0px 20px;
    
`;