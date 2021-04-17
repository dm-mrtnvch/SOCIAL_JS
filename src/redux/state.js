import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
// const SEND_MESSAGE = 'SEND-MESSAGE'


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'раз мэсэдж', likesCount: 3},
                {id: 2, message: 'два мэсэдж', likesCount: 5}
            ],
            newPostText: 'It-kamasutra'
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
            ],
            newMessageBody : ""
        },
        sideBar: [
            {id: 1, name: 'raz'},
            {id: 2, name: 'dva'},
            {id: 3, name: 'tri'}
        ]
    },
    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state)

        // if(action.type === 'ADD-POST') {
        //     let newPost = {
        //         id: 3,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 3
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscriber(this._state)
        // } else if(action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSubscriber(this._state)
        // } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.body
        //     this._callSubscriber(this._state)
        // } else if (action.type === SEND_MESSAGE) {
        //     let body = this._state.dialogsPage.newMessageBody
        //     this._state.dialogsPage.newMessageBody = ''
        //     this._state.dialogsPage.messages.push({id: 6, message: body})
        //     this._callSubscriber(this._state)
        //
        // }
    }
}

// export const addPostActionCreator = () => ({type: ADD_POST})
//
// export const updateNewPostTextActionCreator = (text) => ({
//         type: UPDATE_NEW_POST_TEXT,
//         newText: text
// })
//
// export const sendMessageCreator = () => ({type: SEND_MESSAGE})
//
// export const updateNewMessageBodyCreator = (body) => ({
//     type: UPDATE_NEW_MESSAGE_BODY, body: body
// })

window.store = store
export default store

//
// let man = {
//     name: 'Dimych',
//     age: 31,
//     sayName() {
//         alert(this.name)
//     }
// }
//
// let page = {
//     title: 'SamuraiJS',
//     content: ``,
//     render() {
//         document.write(this.content)
//     }
// }
//
// let page2 = {
//     title: 'SamiraiJS',
//     _content: ``,
//     setContent(content) {
//         return this._content
//     },
//     getContent() {
//         return this._content
//     },
//     render: function () {
//         document.write(this._content)
//     }
// }
//
// page2.setContent('dsfsdfsdf')
// console.log(page2.getContent())
// page2.render()
