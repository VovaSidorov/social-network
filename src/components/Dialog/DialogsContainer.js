import React from 'react';
import DialogItem from "./DialogItem";
import MessageItem from "./Message";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/dialogsReducer';
import Dialog from "./Dialogs";

const DialogContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <Dialog updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
        dialogsPage={state}/>
    )
};

export default DialogContainer;