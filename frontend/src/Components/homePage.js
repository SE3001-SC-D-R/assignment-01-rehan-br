import React from 'react';

function basicHomePage(){
    return(
        <div className ="main">
            <p2>Basic Home Page</p2>
            <div>
                <h2>Which User are you?</h2>
                <a href="/admin/viewCourses">
                    <button>Admin</button>
                </a>
                <a href="/student/registeredCourses">
                    <button>Student</button>
                </a>
            </div>
        </div>
    )
}

export default basicHomePage;