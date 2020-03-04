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


const MyPosts = (props) => {

    const classes = useStyles();

    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        debugger;
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    }
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <form noValidate autoComplete="off">
                    {/*<TextField ref={newPostElement} id="outlined-basic" label="Outlined" variant="outlined"  className={classes.textField} value="asdasdasdasd"/>*/}
                    <textarea onChange={onPostChange} className={classes.textField} ref={newPostElement}
                              value={props.newPostText} />
                    <Button  onClick={ addPost } variant="contained" color="primary"  className={classes.textField}>
                        Add post
                    </Button>
                </form>
            </Grid>
            <Grid item xs={12} >
                {postsElements}
            </Grid>
        </React.Fragment>
    )
}

export default MyPosts;