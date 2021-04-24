import React from 'react';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {
                            ...u,
                            followed: true
                        }
                        return u
                    }
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {
                            ...u,
                            followed: true
                        }
                        return u
                    }
                })
            }
        }
        default:
            return state
    }
}


export const followAC = (userID) => ({type: FOLLOW, userID})
export const unFollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer