import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.jpg';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';
import {unFollow} from '../../redux/users-reducer';
import {usersAPI} from '../../api/api';
import Paginator from '../common/Paginator/Paginator';


const User = ({user, followingInProgress, follow, unFollow}) => {

    return <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small !== null ?
                                    user.photos.small
                                    : userPhoto} className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  unFollow(user.id);
                                              }}>UnFollow</button>
                                    : <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  follow(user.id);
                                              }}
                                    >Follow</button>
                            }
                        </div>
                    </span>
        <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>

    </div>;
};


export default User;