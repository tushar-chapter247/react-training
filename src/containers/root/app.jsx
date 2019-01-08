import React, { Component } from 'react';
import './app.css';
import Navbar from '../navbar/navbar.container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: 'Burger Builder'
    }
  }
  render() {
    return (
      <div className="app-container">
        <Navbar appName={this.state.appName} />
      </div>
    );
  }
}

export default App;
