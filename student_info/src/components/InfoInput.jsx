import React, {  } from 'react';

function InfoInput({name, onChange, value, placeholder,inputRef}) {

    return (
        <input type='text'
        name={name}
        onChange={onChange} 
        value={value}
        placeholder={placeholder}
        ref={inputRef} />
    );
}

InfoInput.defaultProps = {
    ref: null
}
export default InfoInput;