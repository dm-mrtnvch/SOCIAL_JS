import {profileAPI, usersAPI} from '../api/api';
import {act} from '@testing-library/react';
import {wrapMapToPropsFunc} from 'react-redux/lib/connect/wrapMapToProps';

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_TASK = 'DELETE_TASK';

let initialState = {
    posts: [
        {id: 1, message: 'раз мэсэдж', likesCount: 3},
        {id: 2, message: 'два мэсэдж', likesCount: 5}
    ],
    newPostText: 'It-kamasutra',
    profile: null,
    status: ''
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 3
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        // case UPDATE_NEW_POST_TEXT:
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     };

        case DELETE_TASK: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.taskId)
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
};


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const deletePostAC = (taskId) => ({type: DELETE_TASK, taskId })
// export const updateNewPostTextActionCreator = (text) => ({
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text
// });

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const getUserProfile = (userID) => (dispatch) => {
    usersAPI.getProfile(userID)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
};

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const getStatus = (status) => (dispatch) => {
    profileAPI.getStatus(status)
        .then(response => {
            dispatch(setStatus(response.data));
        });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};


export default profileReducer;


//     let newPost = {
//         id: 3,
//         message: state.newPostText,
//         likesCount: 3
//     }
//     let stateCopy = {...state}
//     stateCopy.posts = [...state.posts]
//     stateCopy.posts.push(newPost)
//     stateCopy.newPostText = ''
//     return stateCopy
// }


// let stateCopy = {...state}
// stateCopy.newPostText = action.newText
// return stateCopy