import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData, setAuthUserData} from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false,
};


const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized:true
            }
        }
        default:
            return state;
    }
};


export const setInitializedSucces = () => ({type: SET_INITIALIZED});
export const initializeApp = () => (dispatch) => {
 let promise = dispatch(getAuthUserData());
 promise.then(()=>{
     dispatch(setInitializedSucces());
 })

};

export default appReducer;