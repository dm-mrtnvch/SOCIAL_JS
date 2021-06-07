import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';
import {connect} from 'react-redux';
import Redirect from 'react-router-dom/es/Redirect';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

let mapToStateProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

let DialogsContainer = connect(mapToStateProps, mapDispatchToProps)(AuthRedirectComponent)


export default DialogsContainer

    // const state = props.store.getState().dialogsPage

    // const dialogElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    // const messageElements = state.messages.map(m => <Message id={m.id} message={m.message}/>)
    // const newMessageBody = state.newMessageBody
    //
    // const onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator())
    // }
    // const onNewMessageChange = (body) => {
    //     props.store.dispatch(updateNewMessageBodyCreator(body))
    // }
    //
    // return (
    //     <Dialogs updateNewMessageBody={onNewMessageChange}
    //              sendMessage={onSendMessageClick}
    //              dialogsPage={state}/>
    // )
    //

// }


// function DialogsContainer(props) {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState().dialogsPage
//
//                     const onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator())
//                     }
//                     const onNewMessageChange = (body) => {
//                         store.dispatch(updateNewMessageBodyCreator(body))
//                     }
//
//                     return (
//                         <Dialogs updateNewMessageBody={onNewMessageChange}
//                                  sendMessage={onSendMessageClick}
//                                  dialogsPage={state}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }