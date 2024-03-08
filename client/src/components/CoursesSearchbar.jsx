import {Button, Dialog, Divider, FormControl, IconButton,  InputLabel, OutlinedInput, Slide, Tooltip, Typography, } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close'
import React, {useState} from 'react';
import FilterCourseSearch from "./FilterComponent";

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction="up" ref={ref} {...props} />
})

export default function CourseSearch() {
    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false)
    }
    return (
        <main className="my-4 mx-1 flex">
            <FormControl>
            <InputLabel htmlFor="searchCourse">Search</InputLabel>
            <OutlinedInput id="searchCourse" label='search'
            endAdornment={<>
                    <Tooltip title="Search">
                        <IconButton aria-label="Search Button" className="mr-0.5">
                            <SearchIcon/>
                        </IconButton>
                    </Tooltip>
                    <Divider orientation="vertical" variant="middle" ></Divider>
                    <Tooltip title="Filter Search">
                        <IconButton aria-label="Filter Search Button" edge='end' className="ml-0.5" onClick={handleOpen}>
                            <FilterAltIcon/>
                        </IconButton>
                    </Tooltip>
                    </>
            }
            ></OutlinedInput>
            </FormControl>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <section className="relative flex bg-[#6e315c] p-2.5">
                <Tooltip title="Close">
                    <IconButton edge="start" onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </Tooltip>
                    <Button autoFocus variant="outlined">Save Changes</Button>
                </section>
                    <FilterCourseSearch></FilterCourseSearch>
            </Dialog>
        </main>
    )
}