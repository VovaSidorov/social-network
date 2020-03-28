import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {maxLengthCreator, requireField} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} component={Input} name={"login"} validate={[requireField]}/>
            </div>
            <div>
                <Field placeholder={"Password"} component={Input} name={"password"} validate={[requireField]}/>
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={"rememberMe"}/> remember me
            </div>
            <div>
                <button >Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:"login"})(LoginForm)

const Login = () => {
    const onSubmit = (formData)=>{
        console.log(formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login