import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PageProfile from "./components/PageProfile";
import Dialog from "./components/Dialog";
import { BrowserRouter, Route } from "react-router-dom";

function App({dialogsData,massegesData,postData}) {
    console.log(dialogsData);
    console.log(massegesData);
    console.log(postData);
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
           
            <div className='app-wrapper-content'>
                <Route path="/profile" render={()=><PageProfile postData={postData}/>}/>
                <Route path="/messages" render={()=><Dialog dialogsData={dialogsData} massegesData={massegesData}/>}/>
            </div>
        </div>
        </BrowserRouter>

    );
}

export default App;
