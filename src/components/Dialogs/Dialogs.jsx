import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

function DialogItem(props){
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props){
    return <div className={s.message}>{props.message}</div>
}

function Dialogs(){
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='first name' id={'1'}/>
                <DialogItem name='second name' id={'2'}/>
                <DialogItem name='third name' id={'3'}/>
                <DialogItem name='forth name' id={'4'}/>
                <DialogItem name='fifth name' id={'5'}/>
            </div>
            <div className={s.messages}>
                <Message message={'hi'}/>
                <Message message={'hello it-kamasutra'}/>
                <Message message={'yo'}/>
                <Message message={'yo'}/>
                <Message message={'yo'}/>
            </div>
        </div>
    )
}

export default Dialogs