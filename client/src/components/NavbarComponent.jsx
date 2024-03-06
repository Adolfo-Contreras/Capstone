import { Button, Link } from '@mui/material';
import NavMenu from '../components/NavMenu';

export default function Navbar() {
    return (<>
    <header className=" bg-[#6e315c] w-full h-fit py-2 flex items-center">
        <section className='flex items-center justify-between h-full w-2/6 grow'>
            <NavMenu></NavMenu>
            <img className=' h-full' height='100px' src='/moonFullLogo2.png'></img>
        </section>
        <section className='grow-2 flex items-center justify-end px-2'>
            <Link className='no-underline' href="/login">
                <Button variant='contained' className=' text-black bg-[#b4007a] hover:bg-[#da0095]'>Login</Button>
            </Link>
        </section>
    </header>
    </>)
}
