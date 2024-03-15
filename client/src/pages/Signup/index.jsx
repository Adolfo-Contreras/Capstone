import Navbar from '../../components/Nav/Navbar';
import SignupComponent from "../../components/SignupForm"

export default function SignupPage(){
    return (
        <main className=" w-screen h-screen">
            <Navbar></Navbar>
            <SignupComponent></SignupComponent>
        </main>
    )    
}