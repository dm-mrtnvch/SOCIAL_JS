import React from 'react';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
};


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
};


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


// export const initializeApp = () => (dispatch) => {
//
//     const promise = dispatch(getAuthUserData());
//     Promise.all([promise])
//         .then(() => {
//             dispatch(initializedSuccess());
//         });
// };


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    debugger
    //dispatch(somethingelse());
    //dispatch(somethingelse());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}


export default appReducer;