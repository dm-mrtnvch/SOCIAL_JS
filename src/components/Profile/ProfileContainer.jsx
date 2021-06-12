import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getStatus, updateStatus} from '../../redux/profile-reducer';
import {getUserProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if(!userID) {
            userID = this.props.authorizedUserID
            if(!userID) {
                this.props.history.push('/login')
            }
        }


        this.props.getUserProfile(userID)
        this.props.getStatus(userID)
    }
    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserID: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)