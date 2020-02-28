import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PageProfile from "./components/PageProfile";
import Dialog from "./components/Dialog";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
           
            <div className='app-wrapper-content'>
                <Route path="/profile" 
                render={()=><PageProfile postData={props.state.profilePage.posts}/>}/>
                <Route path="/messages" 
                render={()=><Dialog dialogsData={props.state.dialogsPage.dialogs} massegesData={props.state.dialogsPage.messages}/>}/>
            </div>
        </div>
        </BrowserRouter>

    );
}

export default App;
