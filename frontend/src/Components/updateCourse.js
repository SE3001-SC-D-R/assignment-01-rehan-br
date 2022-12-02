import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import "./CSS/updateCourse.css";
import Navbar from "../Components/Navbar";

function UpdateCourse(){
    const [name, setName] = useState("");
    const [courseId, setCourseId] = useState("");
    const [creditHours, setCreditHours] = useState("");

    return(
        <div className = 'main'>
            <Navbar/>
            <div className = 'submain'>
                <h2>Update Course</h2>
                <input type="text" placeholder="Enter Name" value = {name} onChange = {(e) => setName(e.target.value)}/>
                <button className ='search' onClick={() => {
                    axios.get(`http://localhost:3001/admin/findCourse/${name}`)
                    .then((response) => {
                        console.log(response.data.courseId);
                        console.log(response.data.name);
                        console.log(response.data.creditHours);
                        setCourseId(response.data.courseId);
                        setCreditHours(response.data.creditHours);
                    })
                    .catch((err) => {
                        alert("No Course Found");
                    });
                }}>Search Course</button>
                <div className ='form'>
                    <label for="chk" aria-hidden="true">Updated Course</label>
                    <tr>
                        <td>
                            <input type="text" value = {name} onChange = {(e) => {setName(e.target.value)}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" value = {courseId} onChange = {(e) => {setCourseId(e.target.value)}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" value = {creditHours} onChange = {(e) => {setCreditHours(e.target.value)}}/>
                        </td>
                    </tr>
                    <div>
                        <a href="/admin/viewCourses">
                            <button className = 'update' onClick={() => {
                                const data = [name, courseId, creditHours];
                                axios.put(`http://localhost:3001/admin/updateCourse/${name}`, data)
                                .then((response) => {
                                    alert("Student Updated");
                                    window.location.reload(false);
                                })
                                .catch((err) => {
                                    alert("Error Updating Student");
                                })
                            }}>Update</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCourse;