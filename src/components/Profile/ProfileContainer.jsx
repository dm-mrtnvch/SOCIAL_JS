import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import {getUserProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {usersAPI} from '../../api/api';
import Redirect from 'react-router-dom/es/Redirect';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if(!userID) {
            userID = 2
        }

        this.props.getUserProfile(userID)

        // usersAPI.getProfile(userID)
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //     });
    }
    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    iaAuth: state.auth.iaAuth
})


const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {
    // setUserProfile
    getUserProfile
})(WithUrlDataContainerComponent);