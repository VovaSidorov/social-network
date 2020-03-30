import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {maxLengthCreator, requireField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from './../common/FormControls/formsControl.module.css'

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} component={Input} name={"email"} validate={[requireField]}/>
            </div>
            <div>
                <Field type={"password"} placeholder={"Password"} component={Input} name={"password"} validate={[requireField]}/>
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={"rememberMe"}/> remember me
            </div>
                {props.error && <div className={classes.formSummaryError}>
                Error
            </div>}
            <div>
                <button >Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:"login"})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData)=>{
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if (props.isAuth){
       return  <Redirect to="/profile" />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps,{login})(Login)