import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Button, IconButton, SwipeableDrawer, Link, ButtonGroup, Tooltip} from '@mui/material';
import { useState } from 'react';

export default function NavMenu(){
    const [Drawer, setDrawer] = useState({top:false});
    const toggleDrawer = (open)=>{setDrawer({ top: open})}
        return (<>

                <Tooltip title='Open Navigation'>
                    <IconButton aria-label='Open Navigation Menu' onClick={() => toggleDrawer(true)}>
                        <MenuRoundedIcon/>
                    </IconButton>
                </Tooltip>
        
            <SwipeableDrawer 
            anchor='left' 
            open={Drawer.top}
            onOpen={()=>toggleDrawer(true)}
            onClose={()=>toggleDrawer(false)}
            >
            <main className=' w-full h-full bg-[#adffff] flex flex-col'>
            {/* start of drawer */}
            <ButtonGroup orientation='vertical' variant='outlined'>

            <Link href='/'>
                <Button fullWidth>Home</Button>
            </Link>
            <Link href='/signup'>
                <Button fullWidth>Signup</Button>
             </Link>
            <Link href='/courses'>
                <Button fullWidth>Courses</Button>
            </Link>
            <Link href='/profile'>
                <Button fullWidth>Profile</Button>
            </Link>
            <Link href='/admin'>
                <Button fullWidth>Admin</Button>
            </Link>
            </ButtonGroup>
            {/* end of drawer */}
            </main>
            </SwipeableDrawer>
        </>)
}