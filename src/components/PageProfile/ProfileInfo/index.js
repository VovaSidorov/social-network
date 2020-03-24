import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core/styles";
import Loader from "../../common/loader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const useStyles = makeStyles(theme => ({
    large: {
        paddingTop: theme.spacing(2),
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));


const ProfileInfo = (props) => {
    const classes = useStyles();

    if (!props.profile){
        return <Loader/>
    }
    return (
        <React.Fragment>
            <Grid item xs={12}>
                {/*<img*/}
                {/*    src='https://www.makecovers.com/wp-content/uploads/2015/01/Pursuit-of-Happiness-Facebook-Covers.png'*/}
                {/*    alt="sdfdsfs"/>*/}
            </Grid>
            <Grid item xs={12}>
                {/*<img src={props.profile.photos.large}/>*/}
                <Avatar alt="Remy Sharp" src={props.profile.photos.large}
                        className={classes.large}/>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </Grid>
        </React.Fragment>
    );
};

export default ProfileInfo;