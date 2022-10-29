import React from 'react';
import './navbar.css';

function mainNav(user){
    return(
        <div className="bar">
            <div className = "rightSide">
                <p1 className="welcomeTxt">Welcome {user.name}</p1>
                <button className="topButton" >Home</button>
                <button className="topButton">Log Out</button>
             </div>
        </div>
    );
}

export default mainNav;