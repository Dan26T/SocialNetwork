import {createSelector} from 'reselect';

const getAllUsers = (state) => {
    return state.usersPage.users
}
export const getAllUsersSelector = createSelector( getAllUsers, (users) => {
   return users.filter(u => true)
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}
export const getActivePage = (state) => {
    return state.usersPage.activePage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getIsFollowing = (state) => {
    return state.usersPage.isFollowing
}
export const getPagesCount = createSelector( getPageSize, getTotalCount, (pageSize,totalCount ) => {
    return Math.ceil(totalCount / pageSize);

});