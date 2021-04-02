import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost} from './redux/state';
import {rerenderEntireTree} from './render'

rerenderEntireTree(state)

