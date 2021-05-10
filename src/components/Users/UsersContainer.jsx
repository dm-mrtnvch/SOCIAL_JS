import React from 'react';
import {connect} from 'react-redux';
import UsersAPIComponent from './UsersAPIComponent';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from '../../redux/users-reducer';



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },

    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer