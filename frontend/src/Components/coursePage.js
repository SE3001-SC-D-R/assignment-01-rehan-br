import './coursePage.css';
import NavBar from './Navbar';
import { useState , useEffect} from "react";
import Axios from "axios";
import CourseCard from './courseCard';

function CoursePage(){
    const [listOfCourses, setListOfCourses] = useState([]);
    useEffect(() =>{
        Axios.get("http://localhost:3001/admin/viewCourses").then((response) => {
            setListOfCourses(response.data);
        });
    }, []);

    return(
     <div>
        <NavBar />
        <div classname='mains'>
            <h2>Courses</h2>
            <div classname = 'form'>
                <label for="chk" aria-hidden="true">Courses</label>

                <div>
                    {listOfCourses.map((Courses) => {
                        return(
                            <div>
                                <CourseCard Courses={Courses}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
     </div>   
    )
}

export default CoursePage;