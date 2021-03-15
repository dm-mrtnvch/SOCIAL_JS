import React from 'react'
import s from './Dialogs.module.css'

function Dialogs(){
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    first name
                </div>
                <div className={s.dialog}>
                    second name
                </div>
                <div className={s.dialog}>
                    third name
                </div>
                <div className={s.dialog}>
                    fourth name
                </div>
                <div className={s.dialog}>
                    fifth name
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