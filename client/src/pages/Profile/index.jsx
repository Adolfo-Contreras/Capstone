import Navbar from '../../components/Nav/Navbar';
import ProfileDashboard from '../../components/profile/ProfileDashboardComponent';
import UserInfoComponent from '../../components/profile/UserInfo';

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