import {authApi} from "../api/api";
import {getAuthData} from "./authReducer";

const SET_INITIAL = 'SET_INITIAL'


let initialState = {
    initialazed: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL:
            return {
                ...state,
                initialazed: true
            }
        default:
            return state;
    }
}

export const setInitialSucsess = () => ({type: SET_INITIAL})
export const initialazeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthData())
        Promise.all([promise]).then(() => {
            dispatch(setInitialSucsess())
        })
    }
}

export default appReducer;
