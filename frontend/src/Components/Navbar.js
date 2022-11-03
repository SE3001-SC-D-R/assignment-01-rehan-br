import React from 'react';
import './navbar.css';
import {NavLink} from "react-router-dom";

function NavBar(){
    return(
        <div className="main">
            <div className="navBars">
                <div className="leftNav">
                    FLEEXXX
                </div>
                <div className="rightNav">
                    <div className="n-Lists">
                        <ul style={{listStyleType : 'none'}}>
                            <NavLink className='navlink' to='/home' style={({isActive}) =>
                            (isActive ? {color: '#FFA07A'} : {color: 'black'})}>
                                <li>
                                    Home
                                </li>
                            </NavLink>
                            <NavLink className='navlink' to='/admin/viewCourses' style={({isActive}) =>
                            (isActive ? {color: '#FFA07A'} : {color: 'black'})}>
                                <li>
                                    View Courses
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