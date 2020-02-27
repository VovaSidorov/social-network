import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PageProfile from "./components/PageProfile";
import Dialog from "./components/Dialog";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
           
            <div className='app-wrapper-content'>
                <Route path="/profile" component={PageProfile}/>
                <Route path="/messages" component={Dialog}/>
            
            </div>
        </div>
        </BrowserRouter>

    );
}

export default App;
