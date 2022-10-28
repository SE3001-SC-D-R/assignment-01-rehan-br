import './App.css';
import React from 'react';
import TopBar from './Components/Navbar.js';
import MainPage from './Components/mainPage.js';

function App() {

  return (
    <div className='topBar'>
      <TopBar name = "Rehan Bashir" />
      <MainPage />
    </div>
  );
}

export default App;
