import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PageProfile from "./components/PageProfile";
import Dialog from "./components/Dialog";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/*<PageProfile/>*/}
            <div className='app-wrapper-content'>
                <Dialog/>
            </div>
        </div>

    );
}

export default App;
