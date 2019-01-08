import React, { Component } from "react";
import "./App.css";
import Login from "./components/login";

class App extends Component {
  constructor() {
    super();

    this.state = {
      childData: {}
    };

    this.handleChildValue = this.handleChildValue.bind(this);
  }

  handleChildValue(formValue) {
    console.log("Child value from login component: ", formValue);
    this.setState({
      childData: formValue
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login onUpdateValue={this.handleChildValue} />
          <br />
          <p>Printing input value from Login component</p>
          <p>Email: {this.state.childData.email}</p>
          <p>Password: {this.state.childData.password}</p>
        </header>
      </div>
    );
  }
}

export default App;
