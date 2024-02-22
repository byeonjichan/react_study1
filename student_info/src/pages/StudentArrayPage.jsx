import React, { useRef, useState } from 'react';

function StudentArrayPage(props) {
    const [ studentList , setStudentList ] = useState ([]);
    const [ inputValue, setInputValue ] = useState({
        id:"",
        name:"",
        age: 0,
        address:""
    });
    const [ updateId , setUpdateId ] = useState(0);

    const staticId = useRef(0);
    //staticId.current 값이 변해도 랜더링 x 
    //재랜더링이 발생해도 초기화되지 않음

    const handleInputChange = (e) => {
        const {name , value} = e.target;
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
        
        //const submitList = studentList;
        // let index = studentList.indexOf(studentList.filter(student => student.id === updateId)[0]);
        // submitList[index] = inputValue;
        // setStudentList(submitList);
        // handleCancellClick();
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
                <input type="text" name='id' disabled={true} value={inputValue.id} placeholder='ID' />
                <input type='text' name='name' onChange={handleInputChange} placeholder='이름'value={inputValue.name}></input>
                <input type='text' name='age' onChange={handleInputChange} placeholder='나이' value={inputValue.age}></input>
                <input type='text' name='address' onChange={handleInputChange} placeholder='주소'value={inputValue.address}></input>
                <button onClick={handleAddClick}>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                    </tr>
                </thead>
                <tbody>
                {studentList.map(student=>{
                    return <tr key={student.id}> 
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                        <td>
                        {
                            updateId !== student.id  
                            ? <button onClick={() => {handleUpdateClick(student.id);}}>수정</button>
                            : <button onClick={handleUpdateSubmitClick}>확인</button>
                        }
                        </td>
                        <td>
                        {
                            updateId !== student.id
                            ? <button onClick={() => {handleDeleteClick(student.id);}}>삭제</button>
                            : <button onCanPlay={handleCancellClick}>취소</button>
                        }
                        </td>
                    </tr>
                })}
                </tbody>
            </table>   
        </div>
    );
}

export default StudentArrayPage;