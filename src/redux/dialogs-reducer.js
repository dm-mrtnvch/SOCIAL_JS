const SEND_MESSAGE = 'SEND-MESSAGE'
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
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
    // newMessageBody : ""
}


const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                // newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }

        // case UPDATE_NEW_MESSAGE_BODY:
        //     return {
        //         ...state,
        //         newMessageBody: action.body
        //     }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

// export const updateNewMessageBodyCreator = (body) => ({
//     type: UPDATE_NEW_MESSAGE_BODY, body: body
// })


export default dialogsReducer






// let body = state.newMessageBody
// state.newMessageBody = ''
// state.messages.push({id: 6, message: body})
// return state

// state.newMessageBody = action.body
// return state