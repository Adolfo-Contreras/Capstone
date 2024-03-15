import { FormControl, InputLabel, OutlinedInput, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useSearch } from "../../context/SearchContext";

export default function StudentSearchBar() {
    const {searchTerm, setSearchTerm} = useSearch()
    const handleSearch = (event)=>{
        setSearchTerm(event.target.value.toLowerCase())
    } 
    return (
        <main className="my-4 mx-1 flex">
            <FormControl>
            <InputLabel htmlFor="searchStudent">Search</InputLabel>
            <OutlinedInput id="searchStudent" aria-label="Student Search Textfield" label='search' value={searchTerm} onChange={handleSearch} startAdornment={<SearchIcon/>}></OutlinedInput>
            </FormControl>
        </main>
    )
}