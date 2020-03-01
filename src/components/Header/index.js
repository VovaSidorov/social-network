import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import RedditIcon from "@material-ui/icons/Reddit";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    }
}));
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="relative">
            <Toolbar>
                <RedditIcon className={classes.icon}/>
                <Typography variant="h6" color="inherit" noWrap>
                    Social-network
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;