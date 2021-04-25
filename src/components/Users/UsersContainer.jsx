import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {followAC, setUsersAC, unFollowAC} from '../../redux/users-reducer';



const mapToStateProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


const UsersContainer = connect(mapToStateProps, mapDispatchToProps)(Users)

export default UsersContainer