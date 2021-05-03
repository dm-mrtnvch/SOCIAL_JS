import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/userPhoto.jpg'


const UsersComponentWasDeleted = (props) => {
    let getUsers = () => {
        if(props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>get users </button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ?
                                u.photos.small
                                : userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
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
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default UsersComponentWasDeleted


// {
//     id: 1,
//     photoURL: 'https://www.oma.by/upload/Sh/imageCache/68a/24a/5171a2f8f5555d96816dfed7ede41bb0.jpg',
//     followed: false,
//     fullName: 'dmitry',
//     status: 'i\'m from blr',
//     location: {
//         city: 'Minsk',
//         country: 'Belarus'
//     }
// },
// {
//     id: 2,
//     photoURL: 'https://www.oma.by/upload/Sh/imageCache/68a/24a/5171a2f8f5555d96816dfed7ede41bb0.jpg',
//     followed: true,
//     fullName: 'sasha',
//     status: 'i\'m from msc',
//     location: {
//         city: 'Moscow',
//         country: 'Russia'
//     }
// },
// {
//     id: 3,
//     photoURL: 'https://www.oma.by/upload/Sh/imageCache/68a/24a/5171a2f8f5555d96816dfed7ede41bb0.jpg',
//     followed: false,
//     fullName: 'andrew',
//     status: 'i\'m from ukr',
//     location: {
//         city: 'Kiev',
//         country: 'Ukraine'
//     }
// }