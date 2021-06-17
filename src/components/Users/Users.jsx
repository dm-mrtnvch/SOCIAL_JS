import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
        />
        {
            users.map(u => <User key={u.id}
                                 user={u}
                                 followingInProgress={props.followingInProgress}
                                 follow={props.follow}
                                 unFollow={props.unFollow}
                />
            )
        }
    </div>;
};


export default Users;