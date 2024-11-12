import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Main from './pages/Main'
import Guarantee from './pages/Guarantee'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/guarantee' element={<Guarantee/>}/>
      </Routes>
    </Router>
  );
}
export default App;
