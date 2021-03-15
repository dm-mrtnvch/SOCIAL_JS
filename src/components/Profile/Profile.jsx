import React from 'react'
import s from './Profile.module.css'
import Post from './MyPosts/Post/Post'
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <div>
            <img src="https://st.hzcdn.com/simgs/pictures/garages/garage-pegboard-tool-organization-with-wall-control-pegboard-wall-control-img~f3d19ad906eafe60_9-1291-1-abc953b.jpg"/>
            <div>
                ava + descr
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile