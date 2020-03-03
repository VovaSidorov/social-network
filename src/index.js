import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from "./redux/state"
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={store.getState()} addPost={store.addPost} updateNewPost={store.updateNewPostText}/>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

