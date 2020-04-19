import React, {PureComponent} from 'react';
import Post from '../Post';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {Field, reduxForm} from "redux-form";
import {requireField,maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControls";

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

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props=>{
    console.log("TO");
    let postsElements =
        [...props.posts].reverse()
            .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

        let addNewPost = (values) => {
            props.addPost(values.newPostBody)
        }

        return (
            <React.Fragment>
                <Grid item xs={12}>
                    <AddPostFormRedux onSubmit={addNewPost}/>
                </Grid>
                <Grid item xs={12}>
                    {postsElements}
                </Grid>
            </React.Fragment>
        )
});


const FormPost=(props)=>{
    const classes = useStyles();

    return(
        <form noValidate autoComplete="off" onSubmit={props.handleSubmit}>
                    <Field component={Textarea} name={'newPostBody'} placeholder={'Enter new post'} validate={[requireField, maxLength10]}/>
            {/*<Button  onClick={ onAddPost } variant="contained" color="primary"  className={classes.textField}>*/}
            {/*    Add post*/}
            {/*</Button>*/}
            <button>New post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form:"postAddPostForm"})(FormPost);

export default MyPosts;