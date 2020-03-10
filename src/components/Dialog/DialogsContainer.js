import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/dialogsReducer';
import Dialog from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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