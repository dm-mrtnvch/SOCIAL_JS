import Post from './Post/Post.jsx';
import React from 'react';
import s from './Post/Post.module.css';

function MyPosts(){
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'раз'} likesCount={3}/>
                <Post message={'два'} likesCount='5'/>
            </div>
        </div>
    )
}


export default MyPosts


