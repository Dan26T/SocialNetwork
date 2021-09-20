import Users from './Users'
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setTotalCount,
    followingProgress,
    getUsers
} from '../../redux/userReducer'
import React from "react";
import Preloader from '../common/preloader/preloader'
import {withAuthRedirect} from '../../hoc/withAuth';
import {compose} from "redux";
import {getActivePage, getAllUsersSelector, getIsFetching,
    getIsFollowing, getPageSize, getTotalCount, getPagesCount} from "../../redux/usersSelectors";




class UsersContainer extends React.PureComponent {

    componentDidMount() {

        this.props.getUsers(this.props.activePage,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users} pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount} activePage={this.props.activePage} isFollowing={this.props.isFollowing}
                   onPageChanged={this.onPageChanged} follow={this.props.follow} unfollow={this.props.unfollow} pagesCount={this.props.pagesCount}
                   />

        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: getAllUsersSelector(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        activePage: getActivePage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
        pagesCount: getPagesCount(state)
    }
}


/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (userS) => {
            dispatch(setUsersAC(userS))
        },
        changeActivePage: (pageNumber) => {
            dispatch(setActivePageAC(pageNumber))
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count))
        },
        showLoader: (isFetching) => {
            dispatch(loaderAC(isFetching))
        }
    }
}*/



export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setTotalCount, followingProgress, getUsers
    }),
    withAuthRedirect
)(UsersContainer);
