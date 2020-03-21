import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/dialogsReducer';
import Dialog from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirectComponent} from "../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirectComponent
)(Dialog);