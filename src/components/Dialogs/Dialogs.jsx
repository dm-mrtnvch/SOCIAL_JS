import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

function Dialogs(){
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to='/dialogs/1'>first name</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>second name</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>third name</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>fourth name</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>fifth name</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>raz msg</div>
                <div className={s.message}>dva msg</div>
                <div className={s.message}>tri msg</div>

            </div>
        </div>
    )
}

export default Dialogs