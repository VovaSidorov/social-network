import {combineReducers, createStore} from 'redux';
import sidebarReducer from "./sidebarReducer";
import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export default store;