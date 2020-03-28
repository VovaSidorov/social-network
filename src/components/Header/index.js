import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import RedditIcon from "@material-ui/icons/Reddit";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    }
}));
const Header = (props) => {
    const classes = useStyles();
    const logout = ()=>{
        props.logout()
    }
    return (
        <AppBar position="relative">
            <Toolbar>
                <RedditIcon className={classes.icon}/>
                <Typography variant="h6" color="inherit" noWrap>
                    Social-network
                </Typography>
                <div>
                    {props.isAuth ? <div>{props.login}<button onClick={logout}>Logout</button></div> :
                    <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;