import React, { Component } from 'react';
import './app.css';
import Navbar from '../navbar/navbar.container';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
      </div>
    );
  }
}

export default App;
