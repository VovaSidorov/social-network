import React from 'react';
import Post from '../Post';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {etEE} from "@material-ui/core/locale";

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


const MyPosts = ({postData,addPost}) => {

    const classes = useStyles();
    let postElement = postData.map(post => <Post message={post.message} likesCount={post.likesCount} />);
    let newPostElement = React.createRef();
    let addPostData=()=>{
        let text = newPostElement.current.value;
        alert(text);
        newPostElement.current.value = "";
    };
    let onPostChange =()=>{
        let text = newPostElement.current.value;
        console.log(text);
    };
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <form noValidate autoComplete="off">
                    {/*<TextField ref={newPostElement} id="outlined-basic" label="Outlined" variant="outlined"  className={classes.textField} value="asdasdasdasd"/>*/}
                    <textarea  onChange={onPostChange} className={classes.textField} ref={newPostElement} value={addPost}/>
                    <Button onClick={addPostData} variant="contained" color="primary"  className={classes.textField}>
                        Add post
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