/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { MdErrorOutline } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";

function AuthPageInput({ type, name, onChange, ref, placeholder, message, value}) {
    return (
        <div css={s.inputBox}>
            <input 
            css={s.input}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            ref={ref}
            />
            {
                !!message &&
                <div css={s.inputIcon(message.type)}>
                {message.type === "error" ? <MdErrorOutline /> : <MdCheckCircleOutline />}
                </div>
            }
        {
            !!message &&
            <div css={s.messageBox(message.type)}>
                {message.text}
            </div>
        }
        </div>
    );
}

export default AuthPageInput;