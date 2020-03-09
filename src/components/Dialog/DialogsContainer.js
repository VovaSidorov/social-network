import React from 'react';
import DialogItem from "./DialogItem";
import MessageItem from "./Message";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/dialogsReducer';
import Dialog from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogContainer = (props) => {


    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            };
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            };
            return <Dialog updateNewMessageBody={onNewMessageChange}
                           sendMessage={onSendMessageClick}
                           dialogsPage={state}/>
        }
    }

    </StoreContext.Consumer>
};

export default DialogContainer;