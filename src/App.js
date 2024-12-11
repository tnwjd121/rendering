import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom'; 
import Guarantee from './pages/Guarantee'
import Credit from './pages/Credit';
import Micro from './pages/Micro';
import Integrate from './pages/Integrate';
import Biglone from './pages/Biglone';
import Saitdol from './pages/Saitdol';
import Online from './pages/Online';
import { useEffect } from 'react';      

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); 

  useEffect(() => {
    const defaultParams = {
      adf_cd: '25',
      utm_source: 'naver_brand',
      n_query: 'IBK저축은행',
    };

    const params = new URLSearchParams(defaultParams);
    const currentPath = window.location.pathname;

    // URL에 기본 파라미터 추가
    if (!window.location.search) {
      navigate(`${currentPath}?${params.toString()}`);
    }
  }, []);




  return (
      <Routes>
        <Route path='/ibk/landing/guarantee' element={<Guarantee/>}/>
        <Route path='/ibk/landing/credit' element={<Credit/>}/>
        <Route path='/ibk/landing/micro' element={<Micro/>}/>
        <Route path='/ibk/landing/integrate' element={<Integrate/>}/>
        <Route path='/ibk/landing/integrate/biglone' element={<Biglone/>}/>
        <Route path='/ibk/landing/integrate/saitdol' element={<Saitdol/>}/>
        <Route path='/online' element={<Online/>}/>
      </Routes>
  );
}
export default App;
