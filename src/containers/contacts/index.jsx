import React, { Component } from 'react';
import ContactStyle from './contact.module.css';
import ContactDetailsComponent from '../../components/contact-details/contactdetails';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contactList: [],
      searchList: [],
      addContactForm: false,
      search: '',
      name: '',
      number: '',
      showDetails: false,
      showData: {},
      btnValue: 'Submit',
      editIndex: undefined,
      nameToggler: null
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.showAddItem = this.showAddItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.showContactDetails = this.showContactDetails.bind(this);
    this.nameSort = this.nameSort.bind(this);
  }


  componentDidMount() {
    let list = [...this.state.contactList];
    list = [
      { name: 'Tushar', number: '8748237434' },
      { name: 'Yash', number: '9567546435' },
      { name: 'Rishab', number: '34654654654' },
      { name: 'Sohit', number: '68546643543' }
    ];

    this.setState({
      contactList: list,
      searchList: list
    });
  }




  handleSearch(e) {
    let updatedList = [...this.state.contactList];
    updatedList = updatedList.filter(function (item) {
      return (item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1) || (item.number.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
    });
    this.setState({
      [e.target.name]: e.target.value,
      searchList: updatedList
    });
  }




  handleInputs(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'search') {
      let myList = [...this.state.contactList];
      this.search(e.target.value, myList);
    }
  }




  showAddItem() {
    this.setState({
      addContactForm: true,
      btnValue: 'Submit'
    });
  }




  addItem(e) {
    if (this.state.btnValue === 'Submit') {
      let newList = [...this.state.contactList];
      newList.push({
        name: this.state.name,
        number: this.state.number
      });
      this.setState({ contactList: newList, searchList: newList, addContactForm: false, name: '', number: '' });
    } else if (this.state.btnValue === 'Edit') {
      let newList = [...this.state.contactList];
      if (this.state.editIndex > -1) {
        newList[this.state.editIndex].name = this.state.name;
        newList[this.state.editIndex].number = this.state.number;
      }
      this.setState({ contactList: newList, addContactForm: false, name: '', number: '', editIndex: undefined, btnValue: 'Submit' });
    }

    e.preventDefault(); // stop refresh of page on submit
  }



  showEdit(index) {
    const newList = [...this.state.contactList];
    let data = { ...newList[index] };
    this.setState({
      addContactForm: true,
      name: data.name,
      number: data.number,
      btnValue: 'Edit',
      editIndex: index
    });
  }



  removeItem(index) {
    if (index > -1) {
      let newList = [...this.state.contactList];
      newList.splice(index, 1);
      this.setState({ contactList: newList, searchList: newList });
    }
  }



  showContactDetails(index) {
    const newList = [...this.state.contactList];
    const showData = newList[index];
    this.setState({ showDetails: !this.state.showDetails, showData });
  }



  ASCCompare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  DESCompare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison * -1;
  }




  nameSort() {
    const list = [...this.state.searchList];
    if (this.state.nameToggler === 'DEC') {
      let newList = list.sort(this.DESCompare);
      this.setState({
        nameToggler: 'ASC',
        searchList: newList
      });
    } else {
      let newList = list.sort(this.ASCCompare);
      this.setState({
        nameToggler: 'DEC',
        searchList: newList
      });
    }
  }



  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <input type="text" placeholder="Search" name="search" className="form-control" style={{ width: '250px', margin: '0 auto', marginBottom: '20px' }} aria-describedby="search" value={this.state.search} onChange={this.handleSearch} />
        <div className={ContactStyle.listDiv}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" className={ContactStyle.pointerCursor} onClick={this.nameSort}>Name {this.state.nameToggler === 'ASC' ? <span><i className="fas fa-angle-up"></i></span> : this.state.nameToggler === 'DEC' ? <span><i className="fas fa-angle-down"></i></span> : null}  </th>
                <th scope="col">Number</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.searchList.map((val, ind) => {
                  return <tr key={ind} onClick={() => this.showContactDetails(ind)} className={ContactStyle.pointerCursor}>
                    <th scope="row">{ind + 1}</th>
                    <td>{val.name}</td>
                    <td>{val.number}</td>
                    <td>
                      <button className="btn btn-primary" type="button" onClick={() => this.showEdit(ind)}>Edit</button>

                      <span className={ContactStyle.spacer}></span>

                      <button className="btn btn-danger" type="button" onClick={() => this.removeItem(ind)}>Remove</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
        <br />
        {
          !this.state.addContactForm ?
            <button type="button" className="btn btn-primary" onClick={this.showAddItem}>Add contact</button>
            :
            <div className={ContactStyle.formContainer}>
              <form onSubmit={this.addItem}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" aria-describedby="name" placeholder="Enter name" value={this.state.name} onChange={this.handleInputs} name="name" />
                </div>
                <div className="form-group">
                  <label>Number</label>
                  <input type="text" className="form-control" aria-describedby="number" placeholder="Enter mobile number" value={this.state.number} onChange={this.handleInputs} name="number" />
                </div>
                <button type="submit" className="btn btn-primary">{this.state.btnValue}</button>
              </form>
            </div>
        }
        <br />
        {
          this.state.showDetails ?
            <ContactDetailsComponent data={this.state.showData} />
            :
            null
        }
      </div>
    )
  }
}

export default Contacts;
