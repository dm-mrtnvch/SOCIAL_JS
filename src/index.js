import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/redux-store';
import SamuraiJSApp from './App';

setInterval(() => {
    store.dispatch({type: 'FAKE'})
}, 1000)

ReactDOM.render(
    <SamuraiJSApp/>, document.getElementById('root')
);


