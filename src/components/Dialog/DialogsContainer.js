import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/dialogsReducer';
import Dialog from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    console.log(state);
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);


export default DialogContainer;