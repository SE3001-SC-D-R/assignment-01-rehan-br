import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import './addCourse.css';
import {useLocation} from 'react-router-dom';

function addCourse(){
    const [courseId, setcourseId] = useState("")
    const [name, setname] = useState("")
    const [creditHours, setcredithours] = useState("")
    

    const createCourse = () => {
        axios.post("http://localhost:3001/admin/add", {
            courseId,
            name,
            creditHours,
        }).then((response) =>{
            alert("Course Added");
        });
    };

    return(
        <div className = 'main'>
            <Navbar/>
            <div>
                <h2 data-testid = "AddCourse">
                    Add Course
                </h2>
                <div className = 'form'>
                    <label for='chk' aria-hidden="true">Enter Course Details</label>
                    <tr>
                        <td data-testid = "Code">
                            Course Code
                        </td>
                        <td>
                            <input type="text" data-testid = "Code Field" name="courseCode" maxLength="10" placeholder="SE3001" onChange = {(event) => {
                                setcourseId(event.target.value);
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td data-testid = "Course">
                            Course Name
                        </td>
                        <td>
                            <input types="text" data-testid = "Course Field" name="courseName" maxLength="50" placeholder="SCD" onChange ={(event) => {
                                setname(event.target.value);
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td data-testid = "Credit">
                            Credit Hours
                        </td>
                        <td>
                            <input types="text" data-testid = "Credit Field" name="creditHours" maxlength="2" placeholder='3' onChange={(event) => {
                                setcredithours(event.target.value);
                            }}/>
                        </td>
                    </tr>
                    <div>
                        <a href='/admin/viewCourses'>
                            <button onClick={createCourse}>Add</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default addCourse;

