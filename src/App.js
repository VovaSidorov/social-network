import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PageProfile from "./components/PageProfile";

function App() {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <PageProfile/>
    </div>

  );
}

export default App;
