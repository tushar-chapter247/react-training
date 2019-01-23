import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Tooltip from "@material-ui/core/Tooltip";
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
          <Tooltip title="User Menu" placement="bottom">
            <IconButton
              aria-owns={profileMenu ? "profile-menu" : undefined}
              aria-haspopup="true"
              color="inherit"
              onClick={props.openProfileMenu}
            >
              <PersonPinIcon />
            </IconButton>
          </Tooltip>
          <Menu
            id="profile-menu"
            anchorEl={props.anchorEl}
            placement="top"
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
