import React from 'react'
import s from './Profile.module.css'
import Post from './MyPosts/Post/Post'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
debugger
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                // store={props.store}
                // posts={props.profilePage.posts}
                //      newPostText={props.profilePage.newPostText}
                //      dispatch={props.dispatch}

            />

        </div>
    )
}

export default Profile