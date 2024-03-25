import React, { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { principalState } from '../atoms/principalAtom';
import { getPrincipalRequest } from '../apis/api/principal';
import HomePage from '../pages/HomePage/HomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import { useQuery } from 'react-query';
import RootSideMenuLeft from '../components/RootSideMenuLeft/RootSideMenuLeft';
import RootHeader from '../components/RootHeader/RootHeader';
import { GridLoader } from 'react-spinners';
import FullSizeLoader from '../components/FullSizeLoader/FullSizeLoader';
import MyPage from '../pages/MyPage/MyPage';
import PageContainer from '../components/PageContainer/PageContainer';
import PasswordEditPage from '../pages/PasswordEditPage/PasswordEditPage';
import BookManagement from '../pages/Admin/BookManagement/BookManagement';

// useQuery => GET 요청시에 사용
// 첫번째 매개변수 -> 배열 ["key값" , dependency ]
// 두번째 매개변수 -> 요청메소드(async , await)
/* 세번째 매개변수 -> 옵션
    {
    retry:0 , 
    refetchONWindowFocus: false,
    onSuccess: 함수,
    onError: 함수,
    enabled: true or false
    }
*/ 
function AuthRoute(props) {
    const [ principal , setPrincipal ] =useRecoilState(principalState)
    const principalQuery = useQuery(["principalQuery"], getPrincipalRequest,
    {   
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            console.log("onSuccess")
            setPrincipal({
                
            })
            
        },
        onError: error => {
            console.log(error)
            console.log("오류")
        }
    });



    return (
            <>
            <RootSideMenuLeft />
            <RootHeader />
            <PageContainer>
            {
                principalQuery.isLoading 
                ? <FullSizeLoader size={10}/>
                : <Routes>
                <Route path="/auth/*" element={ <AuthPage /> } />
                <Route path="/" element={<HomePage />}/>
                <Route path="/account/mypage" element={<MyPage />}/>
                <Route path="/account/edit/password" element={<PasswordEditPage />}/>
                <Route path='/admin/book/management' element={ <BookManagement /> }/>
                </Routes>
            }
            </PageContainer>
        </>
    )
}
export default AuthRoute;