import React, { Component } from "react";
import "./Header.css";
import NavBar from "./navbar/navbar";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      anchorEl: null
    };
  }

  openProfileMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeProfileMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <>
        <NavBar
          anchorEl={this.state.anchorEl}
          openProfileMenu={this.openProfileMenu}
          closeProfileMenu={this.closeProfileMenu}
        />
      </>
    );
  }
}

export default Header;
