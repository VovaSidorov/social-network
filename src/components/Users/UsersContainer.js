import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setPage,
    toggleFollowingProgress, getUsers
} from "../../redux/usersReducer";
import Users from "./Users";
import Loader from "../common/loader";
import {withAuthRedirectComponent} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector, getUsersSelector,
} from "../../redux/usersSelectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage,pageSize}=this.props
        this.props.getUsers(currentPage,pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber,pageSize);
    };

    render() {
        console.log(this.props);
        return (
            <>
                {this.props.isFetching ? <Loader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
            </>
        )
    }
}

let mapStateToProps=(state)=>{
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount:getTotalUsersCountSelector(state),
        currentPage:getCurrentPageSelector(state),
        isFetching:getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
};

export default compose(
    connect(mapStateToProps,{follow,unfollow, setPage, toggleFollowingProgress, getUsers}),
    withAuthRedirectComponent
)(UsersContainer)