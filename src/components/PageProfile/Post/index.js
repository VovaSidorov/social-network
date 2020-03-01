import React from 'react';
import Avatar from "@material-ui/core/Avatar";


const Post = (props) => {
    return (
        <React.Fragment>
            <Avatar alt="Cindy Baker"
                    src="https://crestedcranesolutions.com/wp-content/uploads/2013/07/facebook-profile-picture-no-pic-avatar.jpg"/>
            <span>{props.message}</span>
            <span>likes {props.likesCount}</span>
        </React.Fragment>
    )

}

export default Post;