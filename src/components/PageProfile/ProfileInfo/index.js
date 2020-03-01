import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    large: {
        paddingTop: theme.spacing(2),
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));


const ProfileInfo = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <img
                    src='https://www.makecovers.com/wp-content/uploads/2015/01/Pursuit-of-Happiness-Facebook-Covers.png'
                    alt="sdfdsfs"/>
            </Grid>
            <Grid item xs={12}>
                <Avatar alt="Remy Sharp" src="https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png"
                        className={classes.large}/>
            </Grid>
        </React.Fragment>
    );
};

export default ProfileInfo;