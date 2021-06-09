import Post from './Post/Post.jsx';
import React from 'react';
import s from './Post/Post.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext'
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        },
        // updateNewPostText: (text) => {
        //     let action = updateNewPostTextActionCreator(text)
        //     dispatch(action)
        // }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer



    //
    // let state = props.store.getState()

    //
    // const postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    // let newPostElement = React.createRef()

    // const onAddPost = () => {
    //     props.store.dispatch(addPostActionCreator())
    // }
    //
    //
    // let onPostChange = (text) => {
    //     let action = updateNewPostTextActionCreator(text)
    //     props.store.dispatch(action)
    // }
    //
    // return (
    //     <MyPosts addPost={onAddPost}
    //              updateNewPostText={onPostChange}
    //              posts={state.profilePage.posts}
    //              newPostText={state.profilePage.newPostText}
    //
    //     />
//     )
// }

// function MyPostsContainer(props) {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     const state = store.getState()
//                     const onAddPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
//                     let onPostChange = (text) => {
//                         let action = updateNewPostTextActionCreator(text)
//                         store.dispatch(action)
//                     }
//
//                     return (
//                         <MyPosts addPost={onAddPost}
//                                  updateNewPostText={onPostChange}
//                                  posts={state.profilePage.posts}
//                                  newPostText={state.profilePage.newPostText}
// f
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }
