 import React from 'react';
import Header from "./../Header";
import Navbar from "./../Navbar";
import PageProfile from "./../PageProfile";
import DialogsContainer from "../Dialog/DialogsContainer";
import {Route} from "react-router-dom";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App(props) {
    return (

            <Container maxWidth="lg">
                <Header/>
                <Grid container spacing={3}>
                    <Navbar/>
                    <Grid item xs={9}>
                        <Route path="/profile"
                               render={() => <PageProfile store={props.store}/>}/>
                        <Route path="/messages"
                               render={() => <DialogsContainer store={props.store}/>}/>
                    </Grid>
                </Grid>
            </Container>

    );
}

export default App;