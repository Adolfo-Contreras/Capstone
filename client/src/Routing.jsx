import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import Home from "./pages/home";
import SignupPage from './pages/Signup';

const AppRouter = ()=>{
    return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
        </Routes>
    )
}

export default AppRouter