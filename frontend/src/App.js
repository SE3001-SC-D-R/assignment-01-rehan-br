import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import CoursePage from './Components/coursePage';
import HomePage from './Components/homePage';
import AddCourse from './Components/addCourse';
import UpdateCourse from './Components/updateCourse';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/viewCourses' element={<CoursePage />}/>
      <Route path='/addCourse' element={<AddCourse />}/>
      <Route path='/updateCourse' element={<UpdateCourse/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
