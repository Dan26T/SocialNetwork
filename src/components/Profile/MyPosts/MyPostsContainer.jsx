import React from 'react';
import {addPostAC} from '../../../redux/profileReducer'
import MyPost from './MyPosts'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        state: state.profilePage,
        smallPhoto: state.profilePage.profileSmallPhoto
    }
}


const MyPostsContainer = connect(mapStateToProps, {
    addPostClick:addPostAC
})(MyPost)


export default MyPostsContainer;
