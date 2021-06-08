import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'

function ProfileInfo(props){
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<img src="https://st.hzcdn.com/simgs/pictures/garages/garage-pegboard-tool-organization-with-wall-control-pegboard-wall-control-img~f3d19ad906eafe60_9-1291-1-abc953b.jpg"/>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo