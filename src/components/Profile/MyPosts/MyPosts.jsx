import Post from './Post/Post.jsx';
import React from 'react';
import s from './Post/Post.module.css';


function MyPosts(props) {


    const postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()

    const addPost = () => {
        props.addPost()
    }


    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postBlock}>
            My Posts
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}


export default MyPosts


