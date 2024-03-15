import Navbar from '../../components/Navbar';
import ProfileDashboard from '../../components/ProfileDashboardComponent';
import UserInfoComponent from '../../components/UserInfo';

export default function ProfilePage(){
    return (
        <main className=' commonParent'>
            <Navbar></Navbar>
            <main className='flex gap-0'>
                <section className=' grow-2'>
                    <UserInfoComponent></UserInfoComponent>
                </section>
                <section className='grow'>
                    <ProfileDashboard/>
                </section>
            </main>
        </main>
    )
}