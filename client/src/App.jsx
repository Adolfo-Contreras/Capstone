// client/src/App.js

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>hello</p>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home/>
          }/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;