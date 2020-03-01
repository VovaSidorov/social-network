import React from 'react';
import Header from "./../Header";
import Navbar from "./../Navbar";
import PageProfile from "./../PageProfile";
import Dialog from "./../Dialog";
import {BrowserRouter, Route} from "react-router-dom";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App(props) {

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Header/>
                <Grid container spacing={3}>
                    <Navbar/>
                    <Grid item xs={9}>
                        <Route path="/profile"
                               render={() => <PageProfile postData={props.state.profilePage.posts}/>}/>
                        <Route path="/messages"
                               render={() => <Dialog dialogsData={props.state.dialogsPage.dialogs}
                                                     massegesData={props.state.dialogsPage.messages}/>}/>
                    </Grid>
                </Grid>
            </Container>
        </BrowserRouter>
    );
}

export default App;