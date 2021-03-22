import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';





function Dialogs(props) {



    const dialogElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    const messageElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )



}

export default Dialogs