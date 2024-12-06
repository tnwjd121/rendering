import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Main from './pages/Main'
import Guarantee from './pages/Guarantee'
import Credit from './pages/Credit';
import Micro from './pages/Micro';
import Integrate from './pages/Integrate';
import Biglone from './pages/Biglone';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/guarantee' element={<Guarantee/>}/>
        <Route path='/credit' element={<Credit/>}/>
        <Route path='/micro' element={<Micro/>}/>
        <Route path='/integrate' element={<Integrate/>}/>
        <Route path='/biglone' element={<Biglone/>}/>
      </Routes>
    </Router>
  );
}
export default App;
