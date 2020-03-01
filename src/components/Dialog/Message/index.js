import React from 'react';
import Grid from '@material-ui/core/Grid';

const MessageItem = (props) => {
    return (
        <Grid item xs={6}>
        {props.message}
        </Grid>
    )
}

export default MessageItem; 