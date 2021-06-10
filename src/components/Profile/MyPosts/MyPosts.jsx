import Post from './Post/Post.jsx';
import React from 'react';
import s from './Post/Post.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';


function MyPosts(props) {


    const postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    // const addPost = () => {
    //     props.addPost()
    // }
    // let onPostChange = () => {
    //     let text = newPostElement.current.value
    //     props.updateNewPostText(text)
    // }

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    };


    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <AddNewPostFormRedux onSubmit={onAddPost}/>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}


const maxLength10 = maxLengthCreator(10);


function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostText'}
                       validate={[required, maxLength10]}
                       placeholder={'post message'}
                />
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    );
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;


