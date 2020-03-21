import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/dialogsReducer';
import Dialog from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirectComponent} from "../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    console.log(state);
    return {
        dialogsPage: state.dialogsPage,
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


let AuthRedirectComponent = withAuthRedirectComponent(Dialog);

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogContainer;