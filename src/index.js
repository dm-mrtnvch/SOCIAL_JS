import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

setInterval(() => {
    store.dispatch({type: 'FAKE'})
}, 1000)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);


