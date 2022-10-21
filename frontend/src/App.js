import './App.css';
import React from 'react';
import TopBar from './Components/Navbar.js';
import TitlePage from './Titlepage.js';

function App() {
  return (
    <div className='topBar'>
      <TopBar name="Rehan Bashir"/>
      <div>
        <TitlePage />
      </div>
    </div>
  );
}

export default App;
