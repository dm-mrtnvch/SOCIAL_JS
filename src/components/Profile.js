import React from 'react'
import s from './Profile.module.css'

function Profile() {
    return (
        <div className={s.content}>
            <img src="https://st.hzcdn.com/simgs/pictures/garages/garage-pegboard-tool-organization-with-wall-control-pegboard-wall-control-img~f3d19ad906eafe60_9-1291-1-abc953b.jpg"/>
            <div>
                ava + descr
            </div>
            <div>
                My posts
                <div>
                    new post
                    <div className={s.item}>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile