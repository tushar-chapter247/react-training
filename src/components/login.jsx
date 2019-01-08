import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputs(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit() {
    let sendData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.onUpdateValue(sendData);
  }

  render() {
    return (
      <div>
        <h2>Hello! This is login page</h2>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={event => this.handleInputs(event)}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={event => this.handleInputs(event)}
        />

        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default Login;
