import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA_0 = 'SET_USER_DATA_0'
const SET_CAPCHA = 'SET_CAPCHA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    capchaId: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA_0:
            return {
                ...state,
                ...action.payload
            }
        case SET_CAPCHA:
            return {
                ...state,
                capchaId: action.capchaId
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA_0,
    payload: {userId, email, login, isAuth}
})
export const setCapcha = (capchaId) => ({type: SET_CAPCHA, capchaId})

export const getAuthData = () => (dispatch) => {
        return authApi.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login, true));
            }
        })
    }

export const logIn = (email, password, rememberMe) => (dispatch) => {
        authApi.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthData());
            } else if (response.data.resultCode === 10) {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit('loginForm', {_error: message}));
                authApi.security().then(response => {
                    dispatch(setCapcha(response.data.url))
                })
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit('loginForm', {_error: message}));
            }
        })
    }
export const logout = () => {
    return (dispatch) => {
        authApi.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;
