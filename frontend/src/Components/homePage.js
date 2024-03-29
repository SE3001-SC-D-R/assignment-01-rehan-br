import React from 'react';
import './CSS/homePage.css';

function basicHomePage(){
    return(
        <div className ="main">
            
            <h1>Basic Homepage</h1>
            <div className = "buttons">
                <h2 data-testid = "loading">Which User are you?</h2>
                <a href="/admin/viewCourses">
                     <button data-testid = "Admin Button">Admin</button>
                </a>
                <a href="/student/registeredCourses">
                    <button data-testid = "Student Button">Student</button>
                </a>
            </div>
        </div>
    )
}

export default basicHomePage;