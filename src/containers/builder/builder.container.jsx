import React, { Component } from "react";
import Burger from "../../components/burger/burger.component";
import BurgerControls from "../../components/burger/burger-controls/burger-controls.component";

class Builder extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: {
        cheese: 0,
        bacon: 0,
        salad: 0,
        meat: 0
      },
      totalPrice: 0
    };
  }

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls totalPrice={this.state.totalPrice} />
      </>
    );
  }
}

export default Builder;
