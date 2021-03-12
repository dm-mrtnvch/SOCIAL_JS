import React from 'react'
import s from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>messages</a>
            </div>
            <div className={s.item}>
                <a>news</a>
            </div>
            <div className={s.item}>
                <a>music</a>
            </div>
            <div className={s.item}>
                <a>settings</a>
            </div>
        </nav>
    )
}

export default Navbar