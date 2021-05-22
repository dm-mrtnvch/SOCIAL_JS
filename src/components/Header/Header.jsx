import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

function Header(props) {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/736x/01/1f/04/011f04f6f632d44de953360c78244dc3.jpg"/>
            <div className={s.loginBlock}>
                {
                    props.isAuth ? props.login
                        : <NavLink to={'/login'}>login</NavLink>

                }
            </div>
        </header>
    )
}

export default Header;