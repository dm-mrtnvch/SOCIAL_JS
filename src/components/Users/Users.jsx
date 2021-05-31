import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.jpg';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';
import {unFollow} from '../../redux/users-reducer';


const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p && styles.selectedPages}
                    onClick={(e) => {
                        props.onPageChanged(p);
                    }}
                >{p}</span>;
            })}
        </div>
        {

            props.users.map(u => <div key={u.id}>

                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ?
                                    u.photos.small
                                    : userPhoto} className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY' : 'dedd7c3f-c8fc-47f5-80ed-986730aa4e9e'
                                            }
                                        })
                                            .then(response => {
                                                if(response.data.resultCode == 0) {
                                                    props.unFollow(u.id)
                                                }
                                            })
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY' : 'dedd7c3f-c8fc-47f5-80ed-986730aa4e9e'
                                            }
                                        })
                                            .then(response => {
                                                if(response.data.resultCode == 0){
                                                    props.follow(u.id)
                                                }

                                            });
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>;
};


export default Users;