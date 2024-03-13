import Navbar from '../../components/NavbarComponent';
import CourseCard from '../../components/CourseCardComponent';
import CourseSearch from '../../components/CoursesSearchbar';
import data from '../../../database/csvjson.json'
import { useState } from 'react';
import { useSearch } from '../../context/SearchContext';
import { Typography } from '@mui/material';

export default function CoursesPage(){
    const [isValidQuery, setIsValidQuery] = useState(true);
    const {searchTerm} = useSearch();
    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.string_id.toLowerCase().includes(searchTerm)
    );
    const checkQuery = ()=>{
        if (filteredData.length == 0) {
            setIsValidQuery(false)
        }else{setIsValidQuery(true)}
      }    
    return (
        <main className=' w-screen h-screen pb-4'>
            <Navbar></Navbar>
            <CourseSearch checkQuery={checkQuery}/>
            {console.log(filteredData)}
            {isValidQuery ? (filteredData.map(item =>(
                <CourseCard key={item.string_id} data={item}></CourseCard>
            ))) :(<section>
                        <Typography>Sorry! That is not a valid query!</Typography>
                    </section>)
            }
            
        </main>
    )
}