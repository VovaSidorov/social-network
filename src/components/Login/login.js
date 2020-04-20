import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormsControls";
import {requireField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from './../common/FormControls/formsControl.module.css'

const LoginForm = ({handleSubmit,error}) => {
    return(
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [requireField], Input)}
            {createField("Password", "password", [requireField], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

                {error && <div className={classes.formSummaryError}>
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