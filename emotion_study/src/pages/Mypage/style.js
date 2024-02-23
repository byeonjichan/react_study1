import { css } from "@emotion/react";

export const layout = css`
    padding: 100px 30px 0px;
`;
 
export const title = css`
    margin-bottom: 30px;
    text-align: center;
    font-size: 30px;
`;

export const profileHeader = css`
    box-sizing: border-box;
    margin: 0px auto 20px;
    padding: 30px;
    border: 1px solid #dbdbdb;
    width: 700px;
`;

export const profileImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 0px auto 20px;
    width: 200px;
    height: 200px;
    
    cursor: pointer;
    & > img {
        height: 100%;
    }
`;
export const nicknameLayout = css`
    display: flex;
    justify-content: center;
    margin-bottom:20px;
`;

export const nickname = css`
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 2px solid #dbdbdb;
    padding:5px 10px 0px;
    text-align: center;
    width: 200px;
    font-size: 18px;
    font-weight: 600;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;

    &:focus {
        background-color: #fafafa;
        border-bottom: 2px solid #bbb;
    }
`;
export const profileInputLayout = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
    margin:0px auto 20px;
    border:1px solid #dbdbdb;
    width: 700px;
    padding: 10px;  
`;

export const inputBox = css`
    position: relative;
    margin-bottom: 10px;
`;

export const profileInput = css`
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    padding: 20px 20px 10px;
    font-size: 16px;

    width: 335px;
    &:nth-of-type(3n),:nth-of-type(4n){
        margin: 0;
    }
    &:focus {
        outline: 2px solid #5dd6f5;
    }
    &+label {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 23px;
        font-weight: 600;
        transition: all 0.2s ease-in-out;
        color: #333;
    }
    &:focus + label, &:not(:placeholder-shown) + label {
        top: 13px;
        left: 23px;
        font-size: 11px;
    }
`;

export const buttonLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const profilebutton = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 10px 20px;
    background-color: white;
    height: 50px;
    width : 700px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #eeeeee;
    }
`;
