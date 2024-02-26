import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Button, IconButton, SwipeableDrawer, Link} from '@mui/material';
import React, { useState } from 'react';

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
                 <Link href='/'>
            <Button variant='text'>Home</Button>
                 </Link>

                 <Link href='/signup'>
            <Button variant='text'>
                 signup
            </Button>
                 </Link>

                <Link href='/something'>
            <Button variant='text'>
                courses
            </Button>
                </Link>

                <Link href='/profile'>
            <Button variant='text'>
                profile
            </Button>
                </Link>
            {/* end of drawer */}
            </main>
            </SwipeableDrawer>
        </section>
        </>)
}