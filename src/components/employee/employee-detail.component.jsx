import React from "react";

const EmployeeDetailModal = (props) => {
  return (
    <div className="modal fade" id="employeeDetailModal" tabIndex="-1" role="dialog" aria-labelledby="employeeDetailModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="employeeDetailModalLabel">Employee Details</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Name: {props.employee.name}
            <br />
            Email: {props.employee.email}
            <br />
            Phone: {props.employee.phone}
            <br />
            Website: {props.employee.website}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailModal;
