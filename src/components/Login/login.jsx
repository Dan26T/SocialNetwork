import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from '../common/FieldControl/FieldControl'
import {maxLengthCreator, required} from "../../utilits/validation/validation";
import {connect} from 'react-redux';
import {logIn} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "../common/FieldControl/FieldControl.module.css";

const Login = (props) => {

    const onSubmitt = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={`/profile`}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm capchaId={props.capchaId} onSubmit={onSubmitt}/>
    </div>
}
const maxLength50 = maxLengthCreator(50)
const LoginForm = (props) => {
    debugger;
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} validate={[required, maxLength50]} name={'email'} placeholder={"Email"}/>
        </div>
        <div>
            <Field component={Input} validate={[required, maxLength50]} name={'password'} type={'password'} placeholder={"Password"}/>
        </div>
        <div>
            <Field component={Input} name={'remember'} type={'checkbox'}/> remember me
        </div>
        { props.error && <div className={style.formSummaryError}>{props.error}</div>}
        { props.error == "Incorrect anti-bot symbols" && <div className={style.formCapchaError}>
            <div><img src={props.capchaId} /></div>
            <div>
                "Field component={Input} validate={[required, maxLength50]} name={'capcha'} placeholder={"Enter Capcha"}"
            </div>

        </div>}
        <div>
            <button>Log In</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'loginForm'
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    capchaId: state.auth.capchaId
})

export default connect(mapStateToProps, {logIn}) (Login)