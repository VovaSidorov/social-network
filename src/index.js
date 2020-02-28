import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let dialogsData = [
    {id: 1, name: "Vova"},
    {id: 2, name: "Sveta"},
    {id: 3, name: "Andrey"},
    {id: 4, name: "Sacha"},
    {id: 5, name: "Valera"}
];

let massegesData = [
    {id: 1, message: "Gutten"},
    {id: 2, message: "Privet"},
    {id: 3, message: "Aloha"},
    {id: 4, message: "Hello"},
    {id: 5, message: "Hi"}
];

let postData = [
    {id: 1, message: "Gutten aloha", likesCount: 12},
    {id: 2, message: "Privet", likesCount: 1},
    {id: 3, message: "Aloha", likesCount: 2},
    {id: 4, message: "Hello", likesCount: 0},
    {id: 5, message: "Hi", likesCount: 34}
];

ReactDOM.render(<App dialogsData={dialogsData} massegesData={massegesData} postData={postData}/>, document.getElementById('root'));

