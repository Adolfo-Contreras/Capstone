import React from 'react';
import Login from '../../components/LoginComponent';
import Navbar from '../../components/NavbarComponent'

const LoginPage = ()=>{
    return(
        <main>
        <Navbar></Navbar>
            <Login></Login>
        </main>
    )
}

export default LoginPage