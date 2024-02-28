import { Button, Link } from '@mui/material';
import NavMenu from '../components/NavMenu';

export default function Navbar() {
    return (<>
    <header className=" bg-[#F291D4] w-full h-[8%] flex justify-start items-center">
        <section className='flex items-center gap-3'>
        <NavMenu></NavMenu>
            <Link href="/login">
                <Button variant='outlined'>Login</Button>
            </Link>
        </section>
    </header>
    </>)
}