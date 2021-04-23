const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'раз мэсэдж', likesCount: 3},
        {id: 2, message: 'два мэсэдж', likesCount: 5}
    ],
    newPostText: 'It-kamasutra'
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 3
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})


export default profileReducer






//     let newPost = {
//         id: 3,
//         message: state.newPostText,
//         likesCount: 3
//     }
//     let stateCopy = {...state}
//     stateCopy.posts = [...state.posts]
//     stateCopy.posts.push(newPost)
//     stateCopy.newPostText = ''
//     return stateCopy
// }




// let stateCopy = {...state}
// stateCopy.newPostText = action.newText
// return stateCopy