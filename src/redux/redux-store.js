import {combineReducers, createStore} from 'redux';
import sidebarReducer from "./sidebarReducer";
import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store;