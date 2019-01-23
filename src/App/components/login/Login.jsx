import React, { Component } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import ForgotPassword from "../forgot-password/ForgotPassword";

class Login extends Component {
  render() {
    return (
      <>
        <div>
          <h2>This is login page</h2>
          <Link to="/forgot-password">Go to forgot password</Link>
        </div>
        <Switch>
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </>
    );
  }
}

export default Login;
