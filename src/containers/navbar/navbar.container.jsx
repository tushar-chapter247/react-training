import React, { Component } from 'react';
import NavbarView from '../../components/navbar-view/navbar-view.component';

class Navbar extends Component {
  constructor(props) {
    super();
    this.state = {};
  }




  render() {
    return (
      <NavbarView appName={this.props.appName} />
    );
  }

};

export default Navbar;
