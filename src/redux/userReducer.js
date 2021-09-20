import {followApi, userApi} from "../api/api";

const SHOW_MORE = 'SHOW-MORE'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const CHANGE_ACTIVE_PAGE = 'CHANGE-ACTIVe-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    activePage: 1,
    isFetching: true,
    isFollowing: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            debugger
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
           debugger
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SHOW_MORE:
            return {
                ...state,
                users: [...action.userS]
            }
        case CHANGE_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.pageNumber
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowing: action.isFetching ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (userS) => ({type: SHOW_MORE, userS})
export const setActivePage = (pageNumber) => ({type: CHANGE_ACTIVE_PAGE, pageNumber})
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count})
export const showLoader = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const followingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, userId, isFetching})


export const getUsers =(activePage, pageSize ) =>{
    return (dispatch) => {
        dispatch(showLoader(true))
        dispatch(setActivePage(activePage))
        userApi.getUsers(activePage, pageSize).then(response => {
            dispatch(showLoader(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalCount(response.totalCount))
        })
    }
}
export const follow =(userId ) =>{
    return (dispatch) => {
        dispatch(followingProgress(true, userId))
        followApi.postFollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(followingProgress(false, userId))
        });
    }
}
export const unfollow =(userId ) =>{
    return (dispatch) => {
        dispatch(followingProgress(true, userId))
        followApi.deleteFollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(followingProgress(false, userId))
        });
    }
}



export default usersReducer;
