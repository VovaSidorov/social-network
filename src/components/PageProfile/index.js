import React from "react";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(2),
        textAlign: "justify"
    }
}));

const PageProfile = (props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            updateNewPost={props.updateNewPost}
            addPost={props.addPost}/>
        </Paper>
    );
};

export default PageProfile;