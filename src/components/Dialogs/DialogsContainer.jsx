import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';
import {connect} from 'react-redux';
import Redirect from 'react-router-dom/es/Redirect';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapToStateProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // updateNewMessageBody: (body) => {
        //     dispatch(updateNewMessageBodyCreator(body))
        // },
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}


// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// let DialogsContainer = connect(mapToStateProps, mapDispatchToProps)(AuthRedirectComponent)


export default compose(
    connect(mapToStateProps, mapDispatchToProps),
    withAuthRedirect
)
(Dialogs)