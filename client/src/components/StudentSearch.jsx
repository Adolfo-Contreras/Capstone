import { Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Tooltip, } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';

export default function StudentSearchBar() {
    return (
        <main className=" my-4 mx-1">
            <FormControl>
            <InputLabel htmlFor="search">Search</InputLabel>
            <OutlinedInput id="search" label='search'
            endAdornment={<>
                    <Tooltip title="Search">
                        <IconButton aria-label="Search">
                            <SearchIcon/>
                        </IconButton>
                    </Tooltip>
                    <Divider orientation="vertical" variant="middle" ></Divider>
                    <Tooltip title="Filter Search">
                        <IconButton edge='end'>
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