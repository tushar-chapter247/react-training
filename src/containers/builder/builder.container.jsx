import React, { Component } from "react";
import Burger from "../../components/burger/burger.component";
import BurgerControls from "../../components/burger/burger-controls/burger-controls.component";

const INGREDIENT_RATES = {
  salad: 20.50,
  cheese: 10.60,
  meat: 50.30,
  bacon: 30.10,
}

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

  addIngredientToBurger = type => {
    this.setState(state => {
      return {
        ingredients: {
          ...state.ingredients,
          [type]: state.ingredients[type] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_RATES[type]
      };
    });
  };

  removeIngredientFromBurger = type => {
    if (this.state.ingredients[type] < 1) {
      return;
    }
    this.setState(state => {
      return {
        ingredients: {
          ...state.ingredients,
          [type]: state.ingredients[type] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_RATES[type]
      };
    });
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          totalPrice={this.state.totalPrice}
          add={this.addIngredientToBurger}
          remove={this.removeIngredientFromBurger}
        />
      </>
    );
  }
}

export default Builder;
