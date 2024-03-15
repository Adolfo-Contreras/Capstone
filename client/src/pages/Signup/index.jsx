import Navbar from "../../components/Navbar"
import SignupComponent from "../../components/SignupForm"

export default function SignupPage(){
    return (
        <main className=" w-screen h-screen">
            <Navbar></Navbar>
            <SignupComponent></SignupComponent>
        </main>
    )    
}