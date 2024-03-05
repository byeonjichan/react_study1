import { useCallback, useState } from "react";
import ReactQuill from "react-quill";

function App() {

const modules = {
  toolbar:[
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ]
}
const [ title , setTitle ] = useState("");
const [content , setContent] = useState("");

const handleTitleChange = useCallback((e) => {
  setTitle(()=> e.target.value)
},[]);

const handleQuillChange = useCallback((value) => {
  setContent(() => value)
},[]);

  return (
    <>
    <input type="text" onChange={handleTitleChange}/>
    <ReactQuill modules={modules} onChange={handleQuillChange}/>
    </>
  );
}

export default App;
