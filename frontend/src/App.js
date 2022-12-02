import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import CoursePage from './Components/coursePage';
import HomePage from './Components/homePage';
import AddCourse from './Components/addCourse.js';
import UpdateCourse from './Components/updateCourse';
import StudentCourse from './Components/stdCoursePage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/admin/viewCourses' element={<CoursePage />}/>
      <Route path='/admin/addCourse' element={<AddCourse />}/>
      <Route path='/admin/updateCourse' element={<UpdateCourse/>}/>
      <Route path='/student/registeredCourses' element={<StudentCourse/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
