import { Divider, FormControl, IconButton, InputLabel, OutlinedInput, Tooltip, } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';

export default function StudentSearchBar() {

    return (
        <main className="my-4 mx-1 flex">
            <FormControl>
            <InputLabel htmlFor="searchStudent">Search</InputLabel>
            <OutlinedInput id="searchStudent" aria-label="Student Search Textfield" label='search'
            endAdornment={<>
                    <Tooltip title="Search">
                        <IconButton aria-label="Search Button" className="mr-0.5">
                            <SearchIcon/>
                        </IconButton>
                    </Tooltip>
                    <Divider orientation="vertical" variant="middle" aria-hidden></Divider>
                    <Tooltip title="Filter Search">
                        <IconButton edge='end' aria-label="Filter Search Button" className="ml-0.5">
                            <FilterAltIcon/>
                        </IconButton>
                    </Tooltip>
                    </>
            }
            ></OutlinedInput>
            </FormControl>
        </main>
    )
}