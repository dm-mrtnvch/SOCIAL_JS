import profileReducer, {addPostActionCreator, deletePostAC} from './profile-reducer';


let state = {
    posts: [
        {id: 1, message: 'раз мэсэдж', likesCount: 3},
        {id: 2, message: 'два мэсэдж', likesCount: 5}
    ],
    newPostText: 'It-kamasutra',
};



test('new post should be added in posts Array', () => {

    // 1. data
    let action = addPostActionCreator('new post text',)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2].message).toBe('new post text')
    expect(newState.posts[2].id).toBe(3)
})
test('new post should be added with correct title', () => {

    // 1. data
    let action = addPostActionCreator('new post text',)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[2].message).toBe('new post text')
    expect(newState.posts[2].id).toBe(3)
})

test('lentgh of messages should be decrement after deleting', () => {

    // 1. data
    let action = deletePostAC(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(1)
})
