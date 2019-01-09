import React from 'react'
import './employee.css';

const SingleEmployee = (props) => {
  return (
    <>
      <div className="employee-container">
        {
          !props.employeeList.length ?
          <p>Currently there is no employee</p> :
          <ul class="list-group">
            props.employeeList.map((key, ind) => {
              <li class="list-group-item">Vestibulum at eros</li>
            });
          </ul>
        }
      </div>
    </>
  )
};

export default SingleEmployee;
