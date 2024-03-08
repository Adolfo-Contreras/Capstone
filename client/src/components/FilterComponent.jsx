import { InputLabel, Slider, Typography } from "@mui/material";

export default function FilterCourseSearch() {
    return (
        <main>
        <Typography variant="h5">Sort By</Typography>
        <InputLabel htmlFor="tuition">Tuition Cost</InputLabel>
            <Slider id="tuition"></Slider>
        </main>
    )
}