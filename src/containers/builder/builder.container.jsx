import React, { Component } from "react";
import Burger from "../../components/burger/burger.component";

class Builder extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: {
        cheese: 0,
        bacon: 0,
        salad: 0,
        meat: 0
      }
    };
  }

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
      </>
    );
  }
}

export default Builder;
