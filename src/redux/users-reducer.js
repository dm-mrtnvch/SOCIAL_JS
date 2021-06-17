import React from 'react';
import {usersAPI} from '../api/api';
import {currentPage} from './users-selectors';
import {updateObjectInArray} from '../utils/object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: false,
    followingInProgress: [],
    fake: 10
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'FAKE': {
        //     return {...state, fake: state.fake + 1}
        // }
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', false, {followed: true})
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', false, {followed: false})
                //     state.users.map(u => {
                //     if (u.id === action.userID) {
                //         return {
                //             ...u,
                //             followed: false
                //         };
                //     } else {
                //         return u;
                //     }
                // })
            };
        }
        case SET_USERS: {
            return {
                ...state, users: action.users
            };
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_TOTAL_USERS_COUNT : {
            return {...state, totalUsersCount: action.totalCount};
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            };
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            };
        }
        default:
            return state;
    }
};


export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userID) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userID
});


export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    };
};


const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(toggleIsFetching(true, userID));
    const response = await apiMethod(userID);
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userID));
    }
    dispatch(toggleIsFetching(false, userID));
}


export const follow = (userID) => {
    return async (dispatch) => {
        const apiMethod = usersAPI.follow.bind(usersAPI);
        followUnfollowFlow(dispatch, userID, apiMethod, followSuccess);
    };
};


export const unFollow = (userID) => {
    return async (dispatch) => {
        const apiMethod = usersAPI.follow.bind(usersAPI);
        followUnfollowFlow(dispatch, userID, apiMethod, unfollowSuccess);
    };
};


export default usersReducer;