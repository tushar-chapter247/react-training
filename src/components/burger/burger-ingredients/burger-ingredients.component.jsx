import React, { Component } from 'react'
import PropTypes from 'prop-types'; // prop types can only work in class component
import './burger-ingredients.css';

class BurgerIngredients extends Component {
  render() {

    let ingredients = null;

    switch (this.props.type) {
      case 'meat':
        ingredient = (<div className='meat' />);
        break;
      case 'cheese':
        ingredient = (<div className='cheese' />);
        break;
      case 'salad':
        ingredient = (<div className='salad' />);
        break;
      case 'bacon':
        ingredient = (<div className='beacon' />);
        break;
      default:
        ingredient = null;
    }

    return ingredients;

  }
};


BurgerIngredients.PropTypes = { type: PropTypes.string };


export default BurgerIngredients;
