import React from 'react';
import {followAC, setUsersAC, unFollowAC} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC())
        },
        unfollow: (userID) => {
            dispatch(unFollowAC())
        },
        setUsers: (users) => {
            dispatch(setUsersAC())
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer