/** @jsxImportSource @emotion/react */
import ReactQuill from 'react-quill';
import { css } from '@emotion/react';
import { useMemo } from 'react';

const layout = css`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const textEditorLayout = css`
    width: 900px;
    height: 700px;  
`;

function BoardEx(props) {

    const modules = useMemo(() => ({ 
        toolbar: [
        [{'header':[ 1 ,2 ,3 ,4 ,5 ,6 ,false ]}],
        ['bold', 'italic', 'underline', 'strike'],        
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
      
        [{ 'header': 1 }, { 'header': 2 }],              
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],    
        [{ 'indent': '-1'}, { 'indent': '+1' }],         
        [{ 'direction': 'rtl' }],                         
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],         
        [{ 'font': [] }],
        [{ 'align': [] }],
                    
        ['clean']                                       
      ]
    }), []);
    
    const handleQuillChange = (e) => {
        
    }

    return (
        <div css={layout}>
            <div css={textEditorLayout}>
                <ReactQuill style={{
                height:"100%"}} onchange={handleQuillChange} modules={modules}/>
                </div>
        </div>
    );
}

export default BoardEx;