import React from "react";
import "./burger-controls.component.css";
import SingleControl from "../single-control/single-control.component";

const ingredients = [
  { label: "Cheese", type: "cheese" },
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" }
];

const BurgerControls = props => {
  return (
    <div className="burgers-control">
      <p>
        <strong>Total Price: {props.totalPrice.toFixed(2)}</strong>
      </p>
      {ingredients.map(ingredient => (
        <SingleControl
          key={ingredient.label}
          ingredient={ingredient.label}
          add={() => props.add(ingredient.type)}
          remove={() => props.remove(ingredient.type)}
        />
      ))}
    </div>
  );
};

export default BurgerControls;
