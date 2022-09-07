import logo from './logo.svg';
import './App.css';
import Login from './Component/Login_page';
import Details from './Component/Details_page';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
