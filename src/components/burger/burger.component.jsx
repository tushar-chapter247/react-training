import React from "react";
import "./burger.css";
import BurgerIngredients from "./burger-ingredients/burger-ingredients.component";

const Burger = props => {
  let burgerFilling = null;
  burgerFilling = Object.keys(props.ingredients)
    .map(ingKey =>
      [...Array(props.ingredients[ingKey])].map((_, index) => (
        <BurgerIngredients key={ingKey + index} type={ingKey} />
      ))
    )
    .reduce((preVal, curVal) => [...preVal, ...curVal], []);
  if (!burgerFilling.length) {
    burgerFilling = <h4>Please start adding the filling</h4>;
  }

  return (
    <div className="burger">
      <h2>Welcome to Burger Builder</h2>
      <br />
      <div className="bread-top">
        <div className="seeds1" />
        <div className="seeds2" />
      </div>

      {/* All indgredients will be added here programitically */}
      {burgerFilling}

      <div className="bread-bottom" />
    </div>
  );
};

export default Burger;
