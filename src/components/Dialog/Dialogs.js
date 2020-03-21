import React from 'react';
import DialogItem from "./DialogItem";
import MessageItem from "./Message";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(2),
        textAlign: "justify"
    }
}));


const Dialog = (props) => {
  
    const classes = useStyles();

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messageElements = state.messages
        .map(message => <MessageItem message={message.message} key={message.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick=()=>{
        props.sendMessage()
    };
    let onNewMessageChange=(e)=>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };
   if (!props.isAuth) return <Redirect to={"/login"}/>;
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    {dialogsElements}
                </Grid>
                <Grid item xs={6}>
                    <div>{messageElements}</div>
                    <textarea  onChange={onNewMessageChange} 
                    value={newMessageBody}
                    className={classes.textField}></textarea>
                    <Button onClick={onSendMessageClick} variant="contained" color="primary"  className={classes.textField}>
                        New message
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )

};

export default Dialog;