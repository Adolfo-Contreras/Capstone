import {FormControl, InputLabel, OutlinedInput} from "@mui/material";
import React from 'react';
import { useSearch } from "../../context/SearchContext";
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
            <OutlinedInput id="searchCourse" label="search" value={searchTerm} onChange={handleSearch} startAdornment={<Search/>}/>
            </FormControl>
        </section>
    )
}