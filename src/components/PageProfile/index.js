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

const PageProfile = ({postData}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </Paper>
    );
};

export default PageProfile;