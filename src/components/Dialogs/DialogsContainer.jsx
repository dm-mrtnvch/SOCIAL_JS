import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';





function DialogsContainer(props) {

    const state = props.store.getState().dialogsPage

    // const dialogElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    // const messageElements = state.messages.map(m => <Message id={m.id} message={m.message}/>)
    // const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}/>
    )



}

export default DialogsContainer