import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

function DialogItem(props) {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return <div className={s.message}>{props.message}</div>
}

function Dialogs() {

    const dialogs    = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]

    const messages = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hello it-kamasutra'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'}
    ]

    const dialogElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    const messageElements = messages.map(m => <Message id={m.id} message={m.message}/>)

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