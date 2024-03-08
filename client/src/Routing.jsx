import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import Home from "./pages/home";
import SignupPage from './pages/Signup';
import CoursesPage from "./pages/Courses";
import AdminPage from "./pages/admin";
import ProfilePage from "./pages/Profile";

const AppRouter = ()=>{
    return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
    )
}

export default AppRouter