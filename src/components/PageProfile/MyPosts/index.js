import React from 'react';
import Post from '../Post';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const MyPosts = ({postData}) => {

    let postElement = postData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                </form>
            </Grid>
            <Grid item xs={12}>
                {postElement}
            </Grid>
        </React.Fragment>
    )
}

export default MyPosts;