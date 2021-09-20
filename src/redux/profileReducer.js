import {profileApi, userApi} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_SMALL_PHOTO = 'SET_USER_SMALL_PHOTO'
const SET_STATUS = 'SET_STATUS'


let initialState = {
    posts: [
        {id: 1, message: 'Hi', likecount: 11},
        {id: 2, message: 'How are you?', likecount: 20}],
    profile: null,
    profileSmallPhoto: null,
    status: " "
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: 6, message: action.newPostText}]
            }
        case SET_USER_DATA:
            return {
                ...state,
                profile: action.profileData
            }
        case SET_USER_SMALL_PHOTO:
            return {
                ...state,
                profileSmallPhoto: action.userSmallPhoto
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText})


export const setUserProfile = (profileData) => ({type: SET_USER_DATA, profileData})

export const setUserSmallPhoto = (userSmallPhoto) => ({type: SET_USER_SMALL_PHOTO, userSmallPhoto})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        userApi.setUserProfile(userId).then(response => {
            dispatch(setUserProfile(response))
            dispatch(setUserSmallPhoto(response.photos.small))
        })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(response => {
            if (response.data.resultCode===0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;
