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
import {usersApi} from "../../api/api";
import {withAuthRedirectComponent} from "../hoc/withAuthRedirect";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default withAuthRedirectComponent(connect(mapStateToProps,{follow,unfollow, setPage, toggleFollowingProgress, getUsers})(UsersContainer));