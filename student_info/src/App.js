import { Route, Routes, Link } from "react-router-dom";
import Memoization from "./pages/Memoization";
import StudentPage from "./pages/StudentPage";
import StudentArrayPage1 from "./pages/StudentArrayPage";
import StudentArrayPage3 from "./pages/StudentArrayPage3";
import Params from "./pages/Params";
import { useState } from "react";
import SearchPage from "./pages/SearchPage";
import ProductPage from "./pages/ProductPage";
import SubRoute from "./pages/SubRoute";


function App() { 
const [ value, setValue ] = useState("");

return (
  <>
  <input type="text" onChange={(e) => setValue(e.target.value)}/>
  <ul>
    <Link to="/memoization"><li>메모이제이션</li></Link>
    <Link to="/st"><li>학생정보</li></Link>
    <Link to="/sta1"><li>학생들정보1</li></Link>
    <Link to="/sta3"><li>학생들정보3</li></Link>
    <Link to={`/p?data=${value}`}><li>파람스</li></Link>
    <Link to={`/books?bookName=${value}`}><li>도서검색</li></Link>
    <Link to={`/product`}><li>상품</li></Link>
  </ul>
  <Routes>
    <Route path="/memoization" element={<Memoization /> }/>
    <Route path="/st" element={<StudentPage />}/>
    <Route path="/sta1" element={<StudentArrayPage1 />}/>
    <Route path="/sta3" element={<StudentArrayPage3 />}/>
    <Route path="/p" element={<Params />}/>
    <Route path="/books" element={<SearchPage />}/>
    <Route path="/product/:productId" element={<ProductPage />}/>
    <Route path="/sub/*" element={<SubRoute />}/>
  </Routes>
  </>
);
}
export default App;