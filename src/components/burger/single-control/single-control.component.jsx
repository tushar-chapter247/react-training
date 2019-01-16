import React from 'react'
import './single-control.component.css';

const SingleControl = (props) => (
  <div className='single-control'>
      <div className='label'>{props.ingredient}</div>
      <button className='more-button' onClick={props.add}>+</button>
      <button className='less-button' onClick={props.remove} disabled={props.disabled}>-</button>
  </div>
)

export default SingleControl;
