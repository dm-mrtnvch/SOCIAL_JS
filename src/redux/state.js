import {rerenderEntireTree} from '../render';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'раз мэсэдж', likesCount: 3},
            {id: 2, message: 'два мэсэдж', likesCount: 5}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'hello it-kamasutra'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yo'}
        ]
    },
    sideBar: [
        {id: 1, name: 'raz'},
        {id: 2, name: 'dva'},
        {id: 3, name: 'tri'}
    ]
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 3
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}



export default state

