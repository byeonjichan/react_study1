/** @jsxImportSource @emotion/react */
import { Route, Routes } from 'react-router-dom';
import * as s from "./style";
import SignupPage from '../SignupPage/SignupPage';


function AuthPage(props) {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path='/signin' />
                <Route path='/signup' element={ <SignupPage />}/>
                <Route path='/signup/oauth' />
            </Routes>
        </div>
    );
}

export default AuthPage;