import Login from '../../components/LoginComponent';
import Navbar from '../../components/NavbarComponent'

const LoginPage = ()=>{
    return(
        <main className=' w-screen h-screen'>
        <Navbar></Navbar>
            <Login></Login>
        </main>
    )
}

export default LoginPage