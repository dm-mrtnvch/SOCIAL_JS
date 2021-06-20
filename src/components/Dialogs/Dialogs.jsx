import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {Redirect} from 'react-router-dom';





function Dialogs(props) {
    const state = props.dialogsPage

    const dialogElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    const messageElements = state.messages.map(m => <Message id={m.id} message={m.message}/>)
    // const newMessageBody = state.newMessageBody
    //
    // const onSendMessageClick = () => {
    //     props.sendMessage()
    // }
    // const onNewMessageChange = (e) => {
    //     let body = e.target.value
    //     props.updateNewMessageBody(body)
    // }

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
               <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name='newMessageBody' placeholder='enter your message'/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}



const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs