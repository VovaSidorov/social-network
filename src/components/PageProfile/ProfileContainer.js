import React from "react";
import PageProfile from "./index";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus, savePhoto} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != this.props.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {

        return (
            <PageProfile {...this.props} profile={this.props.profile}
                         isOwner={!this.props.match.params.userId}
                         status={this.props.status} updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
            />

        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer);
