import React from "react";
import ProfileInfo from "./ProfileInfo";
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

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
            <MyPostsContainer/>
        </Paper>
    );
};

export default PageProfile;