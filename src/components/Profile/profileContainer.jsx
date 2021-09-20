import React from 'react';
import Profile from './profile';
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from '../../redux/profileReducer'
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from '../../hoc/withAuth';
import {compose} from "redux";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = this.props.authUserId }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    profileSmallPhoto: state.profilePage.profileSmallPhoto,
    authUserId: state.auth.userId
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
