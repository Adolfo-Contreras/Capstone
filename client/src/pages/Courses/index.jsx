import Navbar from '../../components/NavbarComponent';
import CourseCard from '../../components/CourseCardComponent';

const CoursesPage = ()=>{

    return (
        <main className=' w-screen h-screen'>
            <Navbar></Navbar>
            <CourseCard title="hi"></CourseCard>
            <CourseCard title='ligma'></CourseCard>
        </main>
    )
}

export default CoursesPage