import React from 'react';

function ComponentStudy({a , b, c}) {
    // 기능의 집합 : 재사용을 용이하게 하기 위해 => 매개 변수와 리턴을 이해하는 것이 좋다
    // 기능별로 묶기-응집도를 높인다
    // 결합도 - 함수사이의 의존성에 관한 개념
    // 상태관리 useState
    // 마운트 관리 useEffect -> useMemo , useCallBack

    return (
        <div>{a} //// {b}</div>
    );
}

export default ComponentStudy;