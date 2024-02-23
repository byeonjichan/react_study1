import { css } from "@emotion/react";

export const layout = (isShow) => css`
    box-sizing: border-box;
    position: fixed;
    right: 0%;
    top: ${isShow ? "0px" : "-80px"};
    border-bottom:1px solid #dbdbdb;
    width : 50% ;
    z-index: 99;
    height: 80px;
    transition: top 0.5s ease-in-out;
    background-color: white;
    box-shadow: 1px 0px 3px #00000022;
`;
export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    right:2%;
    top: 100%;
    padding: 0;
    border: 1px solid #dbdbdb;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius:8px;
    border-bottom-right-radius:8px;
    width: 50px;
    height: 20px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc;
    }
`;
export const menuList = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
`;
export const menuItem = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    border: 1px solid #dbdbdb;
    width: 200px;
    height: 40px;
    color: black;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    &:nth-of-type(1) {
        border-top: 1px solid #dbdbdb;
    }
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;
