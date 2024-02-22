import React, { useState, useEffect,useRef } from 'react';
import InfoInput from '../components/InfoInput';
import StudentInfo from '../components/StudentInfo';
import InfoButtons from '../components/InfoButtons';

function StudentPage() {
   

    const studentObj = { 
        name:"",
        age:"",
        address:""
      };
  
      const [ student ,setStudent ] = useState(studentObj) //4
      const [ inputValues , setInputValues] = useState(studentObj) //3
      const [ refresh, setRefresh ] = useState(false);
      
      const inputRef = {
        name: useRef(),
        age: useRef(),
        address: useRef()
      }
  
      useEffect(()=>{
        console.log(inputRef.name.current);
      });
      
      useEffect(() => {
        if(refresh){
          setInputValues(studentObj);
        }
        setRefresh(true);
      }, [student]);
  
      const handleInputChange = (e) => {
        const { name , value } = e.target;
        setInputValues ({ //4
            ...inputValues,
            [name]: value
          });
      }
      
      const handleOnOk = () => {  //5
        new Promise((resolve, reject) => {
          setStudent(inputValues)
          resolve();
          }).then(() => {
            setInputValues(studentObj);
          });
      }
      
      const handleOnclean = () => {
        setStudent("");
      }
      
      return (
        <>
        <StudentInfo title="이름" text={student.name}/>
        <StudentInfo title="나이" text={student.age}/>
        <StudentInfo title="주소" text={student.address}/>
         
        <InfoInput
          name={"name"}
          onChange={handleInputChange}
          value={inputValues.name}
          placeholder="이름" 
          inputRef={inputRef.name}/>
  
        <InfoInput
          name={"age"}
          onChange={handleInputChange}
          value={inputValues.age}
          placeholder="나이" 
          inputRef={inputRef.age}/>
  
        <InfoInput
          name={"address"}
          onChange={handleInputChange}
          value={inputValues.address}
          placeholder="주소" 
          inputRef={inputRef.address}/>
  
        <InfoButtons >
        <button onClick={ handleOnOk }>확인</button>
        <button onClick={ handleOnclean }>비우기</button>
        </InfoButtons>
  
      </>
    );
  }
  
  export default StudentPage;

  // let phone = "01082609712"
// let email = "email"
// let user = {
//   "username": "test",
//   ["password"]: "1234",
//   [email] : "test", 
//   phone
  //"test"로 안나오고 위에 변수로 사용됨
//}
/**
 * js 객체특징
 * 1.키값은 문자열이어도 된다. 
 * 2.변수의 문자열 값을 키값으로 쓰고 싶을 때 []대괄호로 묶어서 참조할 수 있다. 
 * 3.변수명만 입력하면 객체의 속성과 value로 한번에 정의 할 수 있다. 
 */