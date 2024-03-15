import Navbar from '../../components/Nav/Navbar';
import CourseCard from '../../components/Course/CourseCard';
import CourseSearch from '../../components/Course/CoursesSearchbar';
import data from '../../../database/courses.json'
import { useState } from 'react';
import { useSearch } from '../../context/SearchContext';
import { Typography } from '@mui/material';

export default function CoursesPage(){
    const [isValidQuery, setIsValidQuery] = useState(null);
    const {searchTerm} = useSearch();
    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.string_id.toLowerCase().includes(searchTerm)
    );
    const checkQuery = ()=>{
        if (filteredData.length != 0) {
            setIsValidQuery(true)
        }else{setIsValidQuery(false)}
      }    
    return (
        <main className='commonParent pb-4'>
            <Navbar></Navbar>
            <CourseSearch checkQuery={checkQuery}/>
            {console.log(filteredData)}
            {console.log(isValidQuery)}
            {isValidQuery ? (
                filteredData.map(item =>(
                <CourseCard key={item.string_id} data={item}></CourseCard>
            ))) : (
                <section>
                    <Typography variant='body2'>Sorry! That is not a valid query!</Typography>
                </section>
                    )}
        </main>
    )
}