import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core/styles";
import Loader from "../../common/loader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWothHooks";
import userPhoto from '../../../essets/images/user.png'

const useStyles = makeStyles(theme => ({
    large: {
        paddingTop: theme.spacing(2),
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));


const ProfileInfo = ({profile, status, updateStatus, isOwner,savePhoto}) => {
    const classes = useStyles();

    if (!profile) {
        return <Loader/>
    }

    const onMainFotoSelected = (e)=>{
        if (e.target.files.length){
            savePhoto(e.target.files[0]);
        }
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
                <Avatar alt="Remy Sharp" src={profile.photos.large || userPhoto}
                        className={classes.large}/>
                {isOwner && <input type={'file'} onChange={onMainFotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </Grid>
        </React.Fragment>
    );
};

export default ProfileInfo;