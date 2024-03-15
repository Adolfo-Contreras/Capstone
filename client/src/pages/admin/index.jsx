import AdminDashboard from "../../components/AdminDashboard";
import Navbar from "../../components/Navbar";
import StudentSearchBar from "../../components/StudentSearch";

export default function AdminPage(){
    return (
        <main className=" commonParent">
        <Navbar/>
        <AdminDashboard/>
        <StudentSearchBar/>
        
        </main>
    )
}