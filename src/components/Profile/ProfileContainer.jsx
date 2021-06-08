import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {getStatus, setUserProfile, updateStatus} from '../../redux/profile-reducer';
import {getUserProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {usersAPI} from '../../api/api';
import Redirect from 'react-router-dom/es/Redirect';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if(!userID) {
            userID = 2
        }

        this.props.getUserProfile(userID)
        this.props.getStatus(userID)
    }
    render() {



        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
//
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
// export default connect (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)