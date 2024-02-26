import './App.css';
import { Reset } from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/sideBar/SideBar';
import SideBarTop from './components/sideBarTop/SideBarTop';
import RootLayout from './components/RootLayout/RootLayout';
import Mypage from './pages/Mypage/Mypage';
import { MENUS } from './constants/menu';

function App() {
  return (
    <>
    <Reset />
    <SideBar/>
    <SideBarTop />
    <RootLayout>
    <Routes>
      {MENUS.map(menu => <Route key={menu.id} path={menu.path} element={menu.element} />)}
    </Routes>
    </RootLayout>
   </>
  );
}

export default App;
