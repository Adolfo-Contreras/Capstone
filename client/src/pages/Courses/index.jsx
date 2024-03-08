import Navbar from '../../components/NavbarComponent';
import CourseCard from '../../components/CourseCardComponent';
import CourseSearch from '../../components/CoursesSearchbar';

const CoursesPage = ()=>{
    return (
        <main className=' w-screen h-screen'>
            <Navbar></Navbar>
            <CourseSearch/>
            <CourseCard title="hi"></CourseCard>
            <CourseCard title='ligma'></CourseCard>
        </main>
    )
}

export default CoursesPage