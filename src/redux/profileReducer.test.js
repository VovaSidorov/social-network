import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import ReactDom from "react-dom";
import App from "../components/App";
import React from "react";


let state = {
    posts: [
        {id: 1, message: "Gutten aloha", likesCount: 12},
        {id: 2, message: "Privet", likesCount: 1},
        {id: 3, message: "Aloha", likesCount: 2},
        {id: 4, message: "Hello", likesCount: 0},
        {id: 5, message: "Hi", likesCount: 34}
    ]
}


it ('length of post must be incremented',()=>{
    let action = addPostActionCreator("NEW TEST");

    let newState= profileReducer(state,action);
    expect(newState.posts.length).toBe(6);
});

it ('message of new post must be correct',()=>{
    let action = addPostActionCreator("NEW TEST");
    let newState= profileReducer(state,action);
    expect(newState.posts[5].message).toBe("NEW TEST");
});

it ('after deleting length of message should be decrement',()=>{
    let action = deletePost(1);
    let newState= profileReducer(state,action);
    expect(newState.posts.length).toBe(4);
});

it ('after deleting length shouldnt be decrement if id is correct',()=>{
    let action = deletePost(1000);
    let newState= profileReducer(state,action);
    expect(newState.posts.length).toBe(5);
});

