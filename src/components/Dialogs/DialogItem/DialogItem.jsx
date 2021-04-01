import {NavLink} from 'react-router-dom';
import React from 'react';
import s from './DialogItem.module.css'

function DialogItem(props) {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
                <img src="https://boritorg.by/images/products/0-50aa920aec3bfbacfe35381f0edd860d.jpg"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem