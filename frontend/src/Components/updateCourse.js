import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function updateCourse(Course){
    const [courseId, setcourseId] = useState("")
    const [name, setname] = useState("")
    const [creditHours, setcredithours] = useState("")
    
    const updating = () => {
        console.log("Updating in backend..");
        axios.post(`http://localhost:3001/admin/updateCourse/${Course._id}`, {
            courseId,
            name,
            creditHours
        })
        .then((response) => console.log(response.data))
        .catch((err) => console.log("error: " + err));
        console.log("Course updated!");
    };

    return(
        <div className = 'main'>
            <Navbar/>
            <div>
                <h2>
                    Update Course
                </h2>
                <div className = 'form'>
                    <label for='chk' aria-hidden="true">Enter Course Details</label>
                    <tr>
                        <td>
                            Course Code
                        </td>
                        <td>
                            <input type="text" name="courseCode" maxLength="10" placeholder="SE3001" onChange = {(event) => {
                                setcourseId(event.target.value);
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Course Name
                        </td>
                        <td>
                            <input types="text" name="courseName" maxLength="50" placeholder="SCD" onChange ={(event) => {
                                setname(event.target.value);
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Credit Hours
                        </td>
                        <td>
                            <input types="text" name="creditHours" maxlength="2" placeholder='3' onChange={(event) => {
                                setcredithours(event.target.value);
                            }}/>
                        </td>
                    </tr>
                    <div>
                        <a href='/admin/updateCourse/'>
                            <button onClick={updating}></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default updateCourse;