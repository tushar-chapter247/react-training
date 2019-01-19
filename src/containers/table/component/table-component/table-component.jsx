import React from "react";
import ReactDataGrid from "react-data-grid";
import "./table-component.css";

const columns = [
  { key: "number", name: "#", width: 50, sortable: true },
  { key: "userName", name: "Name", width: 250, sortable: true },
  { key: "email", name: "Email", width: 250, sortable: true },
  { key: "userAge", name: "Age", width: 80, sortable: true },
  { key: "gender", name: "Gender", width: 150 },
  { key: "cell", name: "CellNumber", width: 200 },
  { key: "phone", name: "Phone", width: 200 },
  { key: "userAddress", name: "Address", width: 500 }
];

let rows = [];

const TableView = props => {
  rows = props.userData;
  let ele = null;
  if (rows && rows.length) {
    ele = (
      <ReactDataGrid
        columns={columns}
        rowGetter={props.rowGetter}
        rowsCount={500}
        minHeight={1000}
        onGridSort={(sortColumn, sortDirection) =>
          props.onGridSort(rows, sortColumn, sortDirection)
        }
      />
    );
  } else {
    ele = <p>No data to show</p>;
  }
  return <div className="table-container-section">{ele}</div>;
};

export default TableView;
