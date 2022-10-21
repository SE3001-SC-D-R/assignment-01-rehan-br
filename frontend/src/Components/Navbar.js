import React from 'react';
import './navbar.css';

function mainNav(student){
    return(
        <div className="bar">
            <div className = "rightSide">
                <p1 className="welcomeTxt">Welcome {student.name}</p1>
                <button className="topButton">Home</button>
                <button className="topButton">Log Out</button>
             </div>
        </div>
    );
}

export default mainNav;