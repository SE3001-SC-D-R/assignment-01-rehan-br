import './App.css';
import React from 'react';
import TopBar from './Components/Navbar.js';
import CoursePage from './Components/coursePage.js';

function App() {

  return (
    <div className='topBar'>
      <TopBar name = "Rehan Bashir" />
      <div className='bar2'>
         <button className = "button" onClick = {<CoursePage />}>View Courses</button>
         <button className = "button">Add Course</button>
         <button className = "button">Delete Course</button>
      </div>
    </div>
  );
}

export default App;
