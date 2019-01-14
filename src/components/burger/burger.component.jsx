import React from 'react';
import './burger.css';
import BurgerIngredients from './burger-ingredients/burger-ingredients.component';

const Burger = (props) => {
  return (
    <div className='burger'>
      <h2>Welcome to Burger Builder</h2>
      <br />
      <div className="bread-top">
        <div className='seeds1' />
        <div className='seeds2' />
      </div>

      {/* All indgredients will be added here programitically */}

      <div className="bread-bottom" />
    </div>
  )
};

export default Burger;
