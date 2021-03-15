import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>news</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='music' activeClassName={s.activeLink}>music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar