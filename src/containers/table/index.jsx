import React, { Component } from 'react';
import './table.css';
import TableView from './component/table-component/table-component';

class Table extends Component {

  render() {
    return (
      <div className="table-container">
        <h2>Table</h2>
        <br/>
        <TableView />
      </div>
    )
  }

};

export default Table;
