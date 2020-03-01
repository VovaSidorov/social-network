import React from 'react';
import {NavLink} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <Grid item xs={6}>
            <NavLink to={path}>{props.name}</NavLink>
        </Grid>
    )
}

export default DialogItem; 