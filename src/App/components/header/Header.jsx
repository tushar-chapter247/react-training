import React, { Component } from "react";
import "./Header.css";
import NavBar from "./navbar/navbar";
import { Route, Switch } from 'react-router-dom';
import Login from "../login/Login";
import Signup from "../signup/Signup";

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
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </>
    );
  }
}

export default Header;
