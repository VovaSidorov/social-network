import {applyMiddleware, combineReducers, createStore} from 'redux';
import sidebarReducer from "./sidebarReducer";
import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;