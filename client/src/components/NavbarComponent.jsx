import { Button, Link } from '@mui/material';
import NavMenu from '../components/NavMenu';

export default function Navbar() {
    return (<>
    <header className=" bg-[#6e315c] w-full h-[8%] flex justify-between items-center">
        <section className='flex align-center justify-between h-full w-1/12'>
            <NavMenu></NavMenu>
            <Link className='flex' sx={{textDecoration: 'none'}} href="/login">
                <Button variant='contained' sx={{color: 'black', backgroundColor: '#B4007A', "&:hover":{backgroundColor:'darkviolet'}}}>Login</Button>
            </Link>
        </section>
        <img className='h-3/5 ' src='../public/moonFullLogo2.png'></img>
    </header>
    </>)
}