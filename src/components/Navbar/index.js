import React from "react";
import {NavLink} from "react-router-dom"
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(2),
        textAlign: "justify"
    },
    buttonMenu: {
        width: "255px",
        backgroundColor: "steelblue",
        color: "black"
    },
    activeLink:{
        color: "gold",
        textDecoration: "none"
},
    link:{
        color: "black",
        textDecoration: "none"
    }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical outlined primary button group"
                >
                    <Button className={classes.buttonMenu}><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></Button>
                    <Button className={classes.buttonMenu}><NavLink to="/messages"   activeClassName={classes.activeLink}>Messages</NavLink></Button>
                    <Button className={classes.buttonMenu}><NavLink to="/users"   activeClassName={classes.activeLink}>Users</NavLink></Button>
                    <Button className={classes.buttonMenu}><a className={classes.link} href="#3">News</a></Button>
                    <Button className={classes.buttonMenu}><a className={classes.link} href="#4">Musik</a></Button>
                    <Button className={classes.buttonMenu}><a className={classes.link} href="#5">Settings</a></Button>
                </ButtonGroup>
            </Paper>
        </Grid>
    );
};

export default Navbar;