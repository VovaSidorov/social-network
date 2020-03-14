import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, unfollowAC,setUsersAC,setPageAC,setTotalUsersCountAC} from "../../redux/usersReducer";

let mapStateToProps=(state)=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
};
let mapDispatchToProps=(dispatch)=>{
    return {
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },
        setPage:(page)=>{
            dispatch(setPageAC(page))
        },
        setTotalUsersCount:(page)=>{
            dispatch(setTotalUsersCountAC(page))
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Users);