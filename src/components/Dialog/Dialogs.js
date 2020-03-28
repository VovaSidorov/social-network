import React from 'react';
import DialogItem from "./DialogItem";
import MessageItem from "./Message";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormsControls";
import {maxLengthCreator, requireField} from "../../utils/validators/validators";

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

    let addNewMessage=(values)=>{
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    {dialogsElements}
                </Grid>
                <Grid item xs={6}>
                    <div>{messageElements}</div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </Grid>
            </Grid>
        </Paper>
    )
};

const maxLength30 = maxLengthCreator(30)

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newMessageBody'} placeholder={'Enter new message'} validate={[requireField, maxLength30]}/>
            <button>New message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(MessageForm);

export default Dialog;