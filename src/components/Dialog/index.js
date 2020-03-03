import React from 'react';
import DialogItem from "./DialogItem";
import MessageItem from "./Message";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(2),
        textAlign: "justify"
    }
}));


const Dialog = ({dialogsData,massegesData}) => {
    const classes = useStyles();

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageElements = massegesData
        .map(message => <MessageItem message={message.message}/>);

    let newPostElement = React.createRef();
    let addPost=()=>{
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    {dialogsElements}
                </Grid>
                <Grid item xs={6}>
                    {messageElements}
                    <textarea  className={classes.textField} ref={newPostElement}></textarea>
                    <Button onClick={addPost} variant="contained" color="primary"  className={classes.textField}>
                        New message
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )

};

export default Dialog;