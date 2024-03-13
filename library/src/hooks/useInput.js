import { useState } from "react"

export const useInput = () => {
    const [value , setValue] = useState("");

    const handleOnchange = (e) => {
        setValue(()=> e.target.value);
    }
    return [value , setValue , handleOnchange]
}