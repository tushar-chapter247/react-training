import React, { Component } from 'react'
import SingleEmployee from '../../components/employee/employee.component';
import request from 'request';

class Employee extends Component {
  state = {
    employeeList: [],
  };




  componentDidMount = () => {
    this.getEmployees();
  };




  getEmployees = () => {
    let that = this;
    request('https://jsonplaceholder.typicode.com/users', function (err, response, body) {
      if (err) {
        console.log('Error: ', err);
        return;
      }
      if (response && response.statusCode === 200) {
        that.setState({
          employeeList: body
        });
        return;
      }
      return;
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
