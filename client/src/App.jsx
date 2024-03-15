// client/src/App.js
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import AppRouter from "./Routing";
import LoginPage from "./pages/Login";
import Home from "./pages/home";
import SignupPage from './pages/Signup';
import React, { useEffect, useState} from 'react'
import { resolveBreakpointValues } from "@mui/system/breakpoints";


export default function App(){

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch
  //   }
  // }, [])

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