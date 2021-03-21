import Post from './Post/Post.jsx';
import React from 'react';
import s from './Post/Post.module.css';

function MyPosts() {

    const posts = [
        {id: 1, message: 'раз мэсэдж', likesCount: 3},
        {id: 2, message: 'два мэсэдж', likesCount: 5}
    ]

    const postElements = posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postBlock}>
            My Posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}


export default MyPosts


