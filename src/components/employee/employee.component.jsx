import React from 'react'
import './employee.css';

const SingleEmployee = (props) => {
  let employeeList = [];
  if (props.employeeList && props.employeeList.length) {
    employeeList = JSON.parse(props.employeeList);
  }

  
  return (
    <>
      <div className="employee-container">
        {
          !employeeList.length ?
          <p>Currently there is no employee</p> :
          <ul className="list-group">
            {employeeList.map((val, ind) => {
              return <li className="list-group-item" key={val.id}>{val.name}</li>
            })}
          </ul>
        }
      </div>
    </>
  )
};

export default SingleEmployee;
