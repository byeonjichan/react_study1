import React, { useCallback } from 'react';

function MemoizationTest2({num1, num2}) {

    const fx1 = useCallback(() => {
        return num1 + 10000;
    },[num1]); // [num1]이 바뀌면 위에 함수를 다시 재정의 해라 
    // useCallback 함수 자체를 저장해서 리턴
    
    const fx2 = useCallback(() => {
        return num2 + 20000;
    },[num2]);

    return (
        <div>
            <h3>{fx1()}</h3>
            <h3>{fx2()}</h3>
        </div>
    );
}

export default MemoizationTest2;