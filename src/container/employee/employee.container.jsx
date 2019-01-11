import React, { Component } from 'react'
import SingleEmployee from '../../components/employee/employee.component';
import axios from 'axios';

class Employee extends Component {
  state = {
    employeeList: [],
  };




  componentDidMount = () => {
    this.getEmployees();
  };




  getEmployees = () => {
    let that = this;
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
