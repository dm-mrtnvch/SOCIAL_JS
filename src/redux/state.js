
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
            ]
        },
        sideBar: [
            {id: 1, name: 'raz'},
            {id: 2, name: 'dva'},
            {id: 3, name: 'tri'}
        ]
    },
    getState() {
        debugger
        return this._state
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    addPost() {
        debugger
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 3
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}



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
