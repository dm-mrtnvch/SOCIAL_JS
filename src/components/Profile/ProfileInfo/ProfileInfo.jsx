import React from 'react'
import s from './ProfileInfo.module.css'

function ProfileInfo(){
    return (
        <div>
            <img src="https://st.hzcdn.com/simgs/pictures/garages/garage-pegboard-tool-organization-with-wall-control-pegboard-wall-control-img~f3d19ad906eafe60_9-1291-1-abc953b.jpg"/>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo