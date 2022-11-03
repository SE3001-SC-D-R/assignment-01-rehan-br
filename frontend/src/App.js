import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import CoursePage from './Components/coursePage';
import HomePage from './Components/homePage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/viewCourses' element={<CoursePage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
