import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
// import {Provider} from './StoreContext';


// export let rerenderEntireTree = (state) => {
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App
                // state={state}
                //  dispatch={store.dispatch.bind(store)}
                //  store={store}
            />
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);


