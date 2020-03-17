 import React from 'react';
import Header from "./../Header";
import Navbar from "./../Navbar";
import DialogsContainer from "../Dialog/DialogsContainer";
import {Route} from "react-router-dom";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
 import UsersContainer from "../Users/UsersContainer";
 import ProfileContainer from "../PageProfile/ProfileContainer";

function App(props) {
    return (

            <Container maxWidth="lg">
                <Header/>
                <Grid container spacing={3}>
                    <Navbar/>
                    <Grid item xs={9}>
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}/>
                        <Route path="/messages"
                               render={() => <DialogsContainer/>}/>
                        <Route path='/users'
                               render={ () => <UsersContainer /> }/>
                    </Grid>
                </Grid>
            </Container>
    );
}

export default App;