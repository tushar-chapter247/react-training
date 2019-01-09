import React, { Component } from 'react'
import SingleEmployee from '../../components/employee/employee.component';

class Employee extends Component {
  state = {
    employeeList: [],
  };




  componentDidMount = () => {
    this.getEmployees();
  };




  getEmployees = () => {

  };





  render() {
    return (
      <div>
        <h2>Employees</h2>
        <SingleEmployee employeeList={this.state.employeeList} />
      </div>
    );
  }

};

export default Employee;
