import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Button, IconButton, SwipeableDrawer, Link} from '@mui/material';
import { useState } from 'react';

export default function NavMenu(){
    const [Drawer, setDrawer] = useState({top:false});
    const toggleDrawer = (open)=>{setDrawer({ top: open})}
        return (<>
            <section>
        <IconButton 
        aria-label='Open Navigation Menu' 
        onClick={() => toggleDrawer(true)}
        ><MenuRoundedIcon/></IconButton>
            <SwipeableDrawer 
            anchor='left' 
            open={Drawer.top}
            onOpen={()=>toggleDrawer(true)}
            onClose={()=>toggleDrawer(false)}
            >
            <main className=' w-full h-full bg-[#adffff] flex flex-col'>
            {/* start of drawer */}
            <Button variant='text'>
                 <Link href='/'>Home</Link>
            </Button>
            <Button variant='text'>
                 <Link href='/signup'>signup</Link>
            </Button>
            <Button variant='text'>
                <Link href='/courses'>courses</Link>
            </Button>
            <Button variant='text'>
                <Link href='/profile'>profile</Link>
            </Button>
            {/* end of drawer */}
            </main>
            </SwipeableDrawer>
        </section>
        </>)
}