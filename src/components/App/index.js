import React, {Component} from 'react';
import Navbar from "./../Navbar";
// import DialogsContainer from "../Dialog/DialogsContainer";
import {BrowserRouter, Route, withRouter} from "react-router-dom";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import UsersContainer from "../Users/UsersContainer";
// import ProfileContainer from "../PageProfile/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import Login from "../Login/login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../../redux/appReducer";
import Loader from "../common/loader";
import store from "../../redux/redux-store";
import {withSuspense} from "../hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('../Dialog/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../PageProfile/ProfileContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized)
            return (<Loader/>);

        return (
            <Container maxWidth="lg">
                <HeaderContainer/>
                <Grid container spacing={3}>
                    <Navbar/>
                    <Grid item xs={9}>
                        <Route path="/profile/:userId?"
                               render={withSuspense(ProfileContainer)}/>
                        <Route path="/messages"
                               render={withSuspense(DialogsContainer)}/>
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


let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MainJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainJSApp;