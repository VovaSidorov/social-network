import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    large: {
        marginTop: theme.spacing(2),
    },
}));


const Post = (props) => {
    
    const classes = useStyles();
    return (
        <React.Fragment>
            <Avatar  className={classes.large} alt="Cindy Baker"
                    src="https://crestedcranesolutions.com/wp-content/uploads/2013/07/facebook-profile-picture-no-pic-avatar.jpg"/>
            <span>{props.message}</span>
            <span>   likes   </span>{props.likesCount}
        </React.Fragment>
    )

}

export default Post;