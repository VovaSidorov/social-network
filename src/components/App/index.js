import React, {Component} from 'react';
import Header from "./../Header";
import Navbar from "./../Navbar";
import DialogsContainer from "../Dialog/DialogsContainer";
import {Route, withRouter} from "react-router-dom";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../PageProfile/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import Login from "../Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../../redux/appReducer";
import Loader from "../common/loader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized)
        return  ( <Loader/>);

        return (
            <Container maxWidth="lg">
                <HeaderContainer/>
                <Grid container spacing={3}>
                    <Navbar/>
                    <Grid item xs={9}>
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}/>
                        <Route path="/messages"
                               render={() => <DialogsContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);