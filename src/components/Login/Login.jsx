import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'}
                       validate={[required]}
                       component={Input}
                       name={'login'}/>
            </div>
            <div>
                <Field placeholder={'password'}
                       validate={[required]}
                       component={Input}
                       name={'password'}/>
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        console.log('rerender');
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;