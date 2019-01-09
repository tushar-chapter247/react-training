import React, { Component } from 'react';
import './app.css';
import Employee from '../employee/employee.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Employee />
      </div>
    );
  }
}

export default App;
