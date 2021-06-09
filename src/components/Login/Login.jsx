import React from 'react';
import {Field, reduxForm} from 'redux-form';

const LoginForm = (props) => {
    return (
        <div onSubmit={props.handleSubmit}>
            <form>
                <div>
                    <Field placeholder={'login'} component={'input'} name={'login'}/>
                </div>
                <div>
                    <Field placeholder={'password'} component={'input'} name={'password'}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={'input'} type={'checkbox'} name={'rememberMe'}/>remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
        console.log('rerender');
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    );
};

export default Login;