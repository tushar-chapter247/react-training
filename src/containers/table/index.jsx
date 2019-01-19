import React, { Component } from "react";
import "./table.css";
import TableView from "./component/table-component/table-component";
import axios from "axios";

class Table extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      bckUsersList: [],
    };
  }

  componentDidMount = () => {
    this.getUserData();
  };

  getUserData = () => {
    const url =
      "https://randomuser.me/api/?results=500&format=json&inc=name,gender,location,email,phone,cell,dob,id,picture";
    axios
      .get(url)
      .then(res => {
        console.log("table data: ", res);
        if (res.status === 200) {
          this.setState({
            users: res.data.results,
            bckUsersList: res.data.results
          });
        }
      })
      .catch(err => console.log("err in fetching table data: ", err));
  };

  rowGetter = i => {
    let data = [...this.state.users];
    if (data && data.length) {
      let row = data[i];
      if (row && row.name && row.location && row.dob) {
        row.number = i+1;
        row.userName = row.name.title + ' ' + row.name.first + ' ' + row.name.last;
        row.userAddress = row.location.street + ' ' + row.location.city + ' ' + row.location.state;
        row.userAge = row.dob.age;
      }
      return row;
    }
  };

  onGridSort = (initialRows, sortColumn, sortDirection) => {
    const originalUsersList = [...this.state.bckUsersList];
    let sortedUsersList = [...this.state.users];
    const comparer = (a, b) => {
      if (sortDirection === "ASC") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else if (sortDirection === "DESC") {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    };
    if (sortDirection === "NONE") {
      this.setState({users: originalUsersList})
      return;
    } else {
      sortedUsersList.sort(comparer);
      this.setState({users: sortedUsersList});
      return;
    }
    // return sortDirection === "NONE" ? initialRows : data.sort(comparer);
  }

  render() {
    return (
      <div className="table-container">
        <h2>Table</h2>
        <br />
        <TableView
          userData={this.state.users}
          rowGetter={this.rowGetter}
          onGridSort={this.onGridSort}
        />
      </div>
    );
  }
}

export default Table;
