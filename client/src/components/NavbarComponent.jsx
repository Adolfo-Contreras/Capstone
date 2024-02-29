import { Button, Link } from '@mui/material';
import NavMenu from '../components/NavMenu';

export default function Navbar() {
    return (<>
    <header className=" bg-[#6e315c] w-full h-[8%] flex justify-between items-center">
        <section className='flex items-center justify-between h-full w-1/6'>
            <NavMenu></NavMenu>
            <Link sx={{textDecoration: 'none'}} href="/login">
                <Button variant='contained' sx={{color: 'black', backgroundColor: '#B4007A', "&:hover":{backgroundColor:'darkviolet'}}}>Login</Button>
            </Link>
            <div></div>
        </section>
        <img className='h-2/4 mr-4 ' src='../public/moonFullLogo2.png'></img>
    </header>
    </>)
}
