import {FormControl, InputLabel, OutlinedInput} from "@mui/material";
import React from 'react';
import { useSearch } from "../context/SearchContext";
import { Search } from "@mui/icons-material";

export default function CourseSearch({checkQuery}) {
    const {searchTerm, setSearchTerm} = useSearch()
    const handleSearch = (event)=>{
        checkQuery()
        setSearchTerm(event.target.value.toLowerCase())
    } 
       
    return (
        <section className="my-4 mx-1 flex">
            <FormControl>
            <InputLabel htmlFor="searchCourse">Search</InputLabel>
            <OutlinedInput id="searchCourse" label="search" value={searchTerm} onChange={handleSearch} startAdornment={<Search/>}
            // endAdornment={<>
            //         <Tooltip title="Search">
            //             <IconButton aria-label="Search Button" className="mr-0.5" edge="end" onClick={handleSearch}>
            //                 <SearchIcon/>
            //             </IconButton>
            //         </Tooltip>
            //         </>
            // }
            ></OutlinedInput>
            </FormControl>
        </section>
    )
}