import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import Main from './pages/Main'
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
        <Route path='/' element={<Main/>}/>
        <Route path='/guarantee' element={<Guarantee/>}/>
        <Route path='/credit' element={<Credit/>}/>
        <Route path='/micro' element={<Micro/>}/>
        <Route path='/integrate' element={<Integrate/>}/>
        <Route path='/biglone' element={<Biglone/>}/>
        <Route path='/saitdol' element={<Saitdol/>}/>
        <Route path='/online' element={<Online/>}/>
      </Routes>
  );
}
export default App;
