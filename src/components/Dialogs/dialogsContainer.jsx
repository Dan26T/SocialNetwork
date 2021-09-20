import Dialogs from './dialogs';
import {sendMessageAC} from '../../redux/dialogReducer'
import {connect} from 'react-redux';
import React from "react";
import {withAuthRedirect} from '../../hoc/withAuth';
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, {
        sendMessageAction:sendMessageAC
    }),
    withAuthRedirect
)(Dialogs);
