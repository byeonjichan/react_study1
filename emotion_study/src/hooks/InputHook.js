import { useState } from "react";

export function useInput () {
    const [ inputValue , setInputValue ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;
        //setInputValue((inputValue)=> value.length < 20 ? value : inputValue);
        // 아래와 같은 코드 (if문 코드가 훨씬 효율적이다.) 
        setInputValue(()=> value);       
    }
    return [ inputValue , onChange ];
}

/**
 * @param {*} maxSize
 * @returns 
 */

export function useMaxSizeValidateInput (maxSize) {
    const [ inputValue , setInputValue ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;
        if(value.length < maxSize){
            setInputValue(()=> value)       
        };
    }
    return [ inputValue , onChange ];
}

