const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'раз мэсэдж', likesCount: 3},
        {id: 2, message: 'два мэсэдж', likesCount: 5}
    ],
    newPostText: 'It-kamasutra',
    profile: null
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
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
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

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
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