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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); 



  return (
      <Routes>
        <Route path='/ibk/landing/guarantee' element={<Guarantee/>}/>
        <Route path='/ibk/landing/credit' element={<Credit/>}/>
        <Route path='/ibk/landing/micro' element={<Micro/>}/>
        <Route path='/ibk/landing/integrate' element={<Integrate/>}/>
        <Route path='/ibk/landing/integrate/biglone' element={<Biglone/>}/>
        <Route path='/ibk/landing/integrate/saitdol' element={<Saitdol/>}/>
        <Route path='/ibk/landing/integrate/online' element={<Online/>}/>
      </Routes>
  );
}
export default App;
