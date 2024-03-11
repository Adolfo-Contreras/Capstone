// client/src/App.js
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import AppRouter from "./Routing";
import LoginPage from "./pages/Login";
import Home from "./pages/home";
import SignupPage from './pages/Signup';
import { useState, useEffect } from 'react'


export default function App(){
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header>
      </header>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage></LoginPage>}/>
          <Route path='/signup' element={<SignupPage></SignupPage>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}