import React, { useEffect, useRef, useState } from 'react';

/** c r u d
 *  이름 나이 주소를 출력할 프로그램을 만든다.
 *  입력할 장소 출력할 장소 
 *  
 * */ 


function StudentArrayPage2(props) {
    const [ studentList , setStudentList] = useState([]) 
    const [inputValue , setInputValue] = useState({
        id:0,
        name:"",
        score: 0
    });
    const [updateId, setUpdateId ] = useState(0);

    const staticId = useRef(0);

    const [ scoreData, setScoreData ] = useState({
        total: 0,
        avg : 0
    });

    const totaldata = () => {
        let sum = 0;
        for(const student of studentList) {
            sum += parseInt(student.score);
        }
        return sum;
    }

    const avgdata = () => {
        let sum = 0;
        for(const student of studentList) {
            sum += parseInt(student.score);
        }
        return studentList.length > 0
            ?(sum / studentList.length).toFixed(2) //소수점처리
            :0
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    }

    const handleAddClick = () => {
        const student = {
            ...inputValue,
            id: staticId.current += 1
        };
        setStudentList([...studentList,student]);
    }
    
     const handleDeleteClick = (id) => {
        setStudentList([...studentList.filter(student => student.id !== id)])
    }
     const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter(student => student.id === id)[0]);
    }
    const handleUpdateSubmitClick = () => {
        const findIndex =
             studentList.indexOf(studentList.filter(student => student.id === updateId)[0])
        
        const updateStudentList = [...studentList];
        
        updateStudentList[findIndex] = inputValue;
        
        setStudentList(updateStudentList);
        handleCancellClick();
    }
    const handleCancellClick = () => {
        setUpdateId(0);
        setInputValue({
        id:"",
        name:"",
        age: "",
        address:""
    });
}                   
    return (
        <div>
            <div>
                <input type="text" name='id' placeholder='ID' disabled={true} value={inputValue.id}/>
                <input type="text" name='name' onChange={handleInputChange} placeholder='이름' value={inputValue.name}/>
                <input type="text" name='score' onChange={handleInputChange} placeholder='점수' value={inputValue.score}/>
                <button onClick={handleAddClick}>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                </thead>
                {studentList.map(student => {
                    return <tr key={student.id}>
                        <th>{student.id}</th>    
                        <th>{student.name}</th>    
                        <th>{student.score}</th>
                        <th>
                        {
                          updateId !== student.id  
                          ? <button onClick={() => {handleUpdateClick(student.id);}}>수정</button>
                          : <button onClick={handleUpdateSubmitClick}>확인</button>                    
                        }    
                        </th>
                        <th>
                        {
                            updateId !== student.id
                            ? <button onClick={() => {handleDeleteClick(student.id);}}>삭제</button>
                            : <button onCanPlay={handleCancellClick}>취소</button>
                        }
                        </th>
                    </tr>
                })}
                <tbody>

                </tbody>
                <tfoot>
                    <tr>
                        <th>총점</th>
                        <th colSpan={2}>{totaldata()}</th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th colSpan={2}>{avgdata()}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StudentArrayPage2;