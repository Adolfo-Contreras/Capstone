import Login from '../../components/LoginForm';
import Navbar from '../../components/Nav/Navbar';

const LoginPage = ()=>{
    return(
        <main className=' w-screen h-screen'>
        <Navbar></Navbar>
            <Login></Login>
        </main>
    )
}

export default LoginPage