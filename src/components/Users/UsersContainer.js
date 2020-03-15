import React from 'react';
import {connect} from "react-redux";
import {follow,unfollow,setUsers,setPage,setTotalUsersCount,toggleIsFetching} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Loader from "../common/loader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {
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
        isFetching:state.usersPage.isFetching
    }
};
// let mapDispatchToProps=(dispatch)=>{
//     return {
//         follow:(userId)=>{
//             dispatch(followAC(userId))
//         },
//         unfollow:(userId)=>{
//             dispatch(unfollowAC(userId))
//         },
//         setUsers:(users)=>{
//             dispatch(setUsersAC(users))
//         },
//         setPage:(page)=>{
//             dispatch(setPageAC(page))
//         },
//         setTotalUsersCount:(page)=>{
//             dispatch(setTotalUsersCountAC(page))
//         },
//         togglesIsFetching:(isFetching)=>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
// };

export default connect(mapStateToProps,{
    follow,unfollow,setUsers,setPage,setTotalUsersCount,toggleIsFetching
})(UsersContainer);