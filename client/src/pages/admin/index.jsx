import AdminDashboard from "../../components/AdminDashboard";
import Navbar from "../../components/NavbarComponent";
import StudentSearchBar from "../../components/StudentSearch";

export default function AdminPage(){
    return (
        <main className=" w-screen h-screen">
        <Navbar></Navbar>
        <AdminDashboard/>
        <StudentSearchBar/>
        </main>
    )
}