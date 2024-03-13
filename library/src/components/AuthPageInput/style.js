import { css } from "@emotion/react";
import { type } from "@testing-library/user-event/dist/type";

export const inputBox = css`
   box-sizing: border-box;
   margin-bottom: 10px;
   width: 100%;
`;
export const input = css`
   box-sizing: border-box;
   border: 1px solid #dbdbdb;
   border-radius: 3px;
   padding: 10px 20px 10px 10px;
   width: 100%;
   background-color: white;
   font-size: 14px;
   cursor: pointer;
`;
export const messageBox = (type) => css`
   padding: 5px 10px;
   color: ${type === 'error' ? "#ff6161" : "#63ff80"};
   width: 100%;
   font-size: 11px;
   font-weight: 600;
`;
export const inputIcon = (type) => css`
   position: absolute;
   top: 10px;
   right: 10px;
   color: ${type === 'error' ? "#ff6161" : "#63ff80"};
`;