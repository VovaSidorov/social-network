import React from "react";
import PageProfile from "./index";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import Dialog from "../Dialog/Dialogs";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
        }
        this.props.getUserProfile(userId);
        // setTimeout(()=>{
            this.props.getStatus(userId);
        // },2000)

    }

    render() {

        return (
            <PageProfile {...this.props} profile={this.props.profile}
                         status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId:state.auth.userId,
    isAuth:state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus}),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer);
