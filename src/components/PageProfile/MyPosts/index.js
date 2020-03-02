import React from 'react';
import Post from '../Post';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    large: {
        paddingTop: theme.spacing(2),
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
      textField: {
        marginTop: theme.spacing(2),
    },
}));


const MyPosts = ({postData}) => {

    const classes = useStyles();
    let postElement = postData.map(post => <Post message={post.message} likesCount={post.likesCount} />)
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Outlined" variant="outlined"  className={classes.textField}/>
                    <Button variant="contained" color="primary"  className={classes.textField}>
                        Primary
                    </Button>
                </form>
            </Grid>
            <Grid item xs={12} >
                {postElement}
            </Grid>
        </React.Fragment>
    )
}

export default MyPosts;