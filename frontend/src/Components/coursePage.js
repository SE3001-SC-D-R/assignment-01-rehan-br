import './coursePage.css';
import { useState , useEffect} from "react";
import Axios from "axios";

function CoursePage(){

    const [resourceType, setResourceType] = useState('');
  
    useEffect(() => {
        Axios.get("/admin/viewCourses")
        .then((response) => {
            setResourceType(response.data);
        });
    }, []);

    return(
        <div>
            <h1 className = "heading">Course List</h1>
        </div>
    );
}

export default CoursePage;