import React, { Component } from 'react'
import EmployeeTable from '../../components/employee/employee.component';
import EmployeeDetailModal from '../../components/employee/employee-detail.component';
import axios from 'axios';

class Employee extends Component {
  state = {
    employeeList: [],
    employee: {}
  };




  componentDidMount = () => {
    this.getEmployees();
  };




  getEmployees = () => {
    const that = this;
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url)
      .then(function (response) {
        if (response.status === 200) {
          that.setState({ employeeList: response.data });
        }
      })
      .catch(function (err) {
        console.log('Error: ', err);
      });
  };




  getSingleEmployee = (id) => {
    const that = this;
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    axios.get(url)
      .then(function (response) {
        if (response.status === 200) {
          that.setState({ employee: response.data });
        }
      })
      .catch(function (err) {
        console.log('Error: ', err);
      });
  }




  render() {
    return (
      <div>
        <h2>Employees</h2>
        <br />
        <EmployeeTable employeeList={this.state.employeeList} getSingleEmployee={this.getSingleEmployee} />
        <br />
        <EmployeeDetailModal employee={this.state.employee} />
      </div>
    );
  }

};


export default Employee;
