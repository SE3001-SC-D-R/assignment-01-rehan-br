import './CSS/coursePage.css';
import { useState , useEffect} from "react";
import Axios from "axios";
import CourseCard from './stdCourseCard';

function CoursePage(){
    const [listOfCourses, setListOfCourses] = useState([]);
    useEffect(() =>{
        Axios.get("http://localhost:3001/student/viewCourses").then((response) => {
            setListOfCourses(response.data);
        });
    }, []);

    console.log(listOfCourses);

    return(
     <div>
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