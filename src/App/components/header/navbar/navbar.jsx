import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";

const NavBar = props => {
  const profileMenu = Boolean(props.anchorEl);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            React Redux
          </Typography>
          <span className="flex-spacer" />
          <IconButton
            aria-owns={profileMenu ? "profile-menu" : undefined}
            aria-haspopup="true"
            color="inherit"
            onClick={props.openProfileMenu}
          >
            <PersonIcon />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={props.anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={profileMenu}
            onClose={props.closeProfileMenu}
          >
            <MenuItem onClick={props.closeProfileMenu}>Profile</MenuItem>
            <MenuItem onClick={props.closeProfileMenu}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
