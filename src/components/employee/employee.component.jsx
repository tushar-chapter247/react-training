import React from 'react'
import './employee.css';


const EmployeeTable = (props) => {
  return (
    <>
      <div className="employee-container">
        {
          !props.employeeList.length ?
            <p>Currently there is no employee</p> :
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.employeeList.map((key, ind) => {
                      return (
                        <tr key={key.id}>
                          <th scope="row">{key.id}</th>
                          <td align="left">{key.name}</td>
                          <td align="left">{key.username}</td>
                          <td align="left">{key.email}</td>
                          <td>
                            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#employeeDetailModal" onClick={() => props.getSingleEmployee(key.id)}>
                              Info
                            </button>
                            &nbsp;
                            <button type="button" className="btn btn-warning">
                              Edit
                            </button>
                            &nbsp;
                            <button type="button" className="btn btn-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
        }
      </div>
    </>
  )
};


export default EmployeeTable;
