import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";

const NavBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            React Redux
          </Typography>
          <span className="flex-spacer" />
          <IconButton color="inherit" aria-label="Login">
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
