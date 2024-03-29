import React from 'react';
import './CSS/navbar.css';
import {NavLink} from "react-router-dom";

function NavBar(){
    return(
        <div className="main">
            <div className="navBars">
                <div className="leftNav">
                    UMS
                </div>
                <div className="rightNav">
                    <div className="n-Lists">
                        <ul style={{listStyleType : 'none'}}>
                            <NavLink className='navlink' to='/' style={({isActive}) =>
                            (isActive ? {color: '#FFA07A'} : {color: 'black'})}>
                                <li data-testid="home">
                                    Home
                                </li>
                            </NavLink>
                            <NavLink className='navlink' to='/admin/viewCourses' style={({isActive}) =>
                            (isActive ? {color: '#FFA07A'} : {color: 'black'})}>
                                <li data-testid="view">
                                    View Courses
                                </li>
                            </NavLink>
                            <NavLink className='navlink' to='/admin/addCourse' style={({isActive}) =>
                            (isActive ? {color: '#FFA07A'} : {color: 'black'})}>
                                <li data-testid="add">
                                    Add Courses
                                </li>
                            </NavLink>
                            <NavLink className='navlink' to='/admin/updateCourse' style={({isActive}) =>
                            (isActive ? {color: '#FFA07A'} : {color: 'black'})}>
                                <li data-testid="update">
                                    Update Courses
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;