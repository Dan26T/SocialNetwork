import React from 'react';
import Header from './header';
import {connect} from "react-redux";
import {logout} from '../../redux/authReducer';


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />

    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    logPhoto: state.profilePage.profileSmallPhoto
});

export default connect(mapStateToProps, {logout})(HeaderContainer);
