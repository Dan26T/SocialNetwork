import {authApi, profileApi, userApi} from "../api/api";

const ADD_POST = 'profile/ADD-POST'
//const UPDATE_NEW_POST_TEXT = 'profile/UPDATE-NEW-POST-TEXT'
const SET_USER_DATA = 'profile/SET_USER_DATA'
const SET_USER_SMALL_PHOTO = 'profile/SET_USER_SMALL_PHOTO'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'


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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        default:
            return state;
    }
}

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText})

export const setUserProfile = (profileData) => ({type: SET_USER_DATA, profileData})

export const setUserSmallPhoto = (userSmallPhoto) => ({type: SET_USER_SMALL_PHOTO, userSmallPhoto})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const deletePostAC = (postId) => ({type: DELETE_POST, postId})

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await userApi.setUserProfile(userId)
        dispatch(setUserProfile(response))
        dispatch(setUserSmallPhoto(response.photos.small))
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileApi.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileApi.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export default profileReducer;
