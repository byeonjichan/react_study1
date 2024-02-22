import React, { useEffect, useMemo, useState } from 'react';

function MemoizationTest({ num1, num2 }) {

    const [ num3, setnum3 ] = useState(0);
    const [ tempNum5, settempNum5 ] = useState(0);

    useEffect(() => {
        settempNum5(num3 + 40000);
    },[num3]);

    console.log("MemoizationTest 렌더링");

    const tempNum1 = useMemo(() => { // 함수를 호출해서 값자체를 저장해서 리턴 값만 들어가는게 useMemo
        console.log("memo: num1");
        return num1 * 10;
    },[num1]);

    const tempNum2 = useMemo(() => {
        console.log("memo: num2");
        return num2 + 10000;
    },[num2]);

    const tempNum3 = useMemo(() => {
        console.log("memo: num3");
        return num3 + 20000;
    },[num3]);

    const tempNum4 = useMemo(() => {
        console.log("memo: num4");
        return num1 + num2;
    },[ num1, num2]);

    return (
        <>
            <button onClick={() => setnum3(num3 + 1)}>num3증가</button>
            <h3>{tempNum1}</h3>
            <h3>{tempNum2}</h3>
            <h3>{tempNum3}</h3>
            <h3>{tempNum4}</h3>
        </>
    );
}

export default MemoizationTest;