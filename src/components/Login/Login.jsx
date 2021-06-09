import React from 'react';
import {reduxForm} from 'redux-form';

const LoginForm = (props) => {
    return (
        <div>
            <form>
                <div>
                    <input placeholder={'login'}/>
                </div>
                <div>
                    <input placeholder={'password'}/>
                </div>
                <div>
                    <input type={'checkbox'}/>
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
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>

    );
};

export default Login;