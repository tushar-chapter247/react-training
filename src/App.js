import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World!</h1>
          <h3>Team list: </h3>
          <ul>{this.renderPersonList()}</ul>
        </header>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ person: ["Sonu", "Sohit", "Rishab", "Yash", "Tushar"] });
  }

  renderPersonList() {
    const ele =
      this.state.person && this.state.person.length > 0
        ? this.state.person.map((val, index) => {
            return <li key={index}>{val}</li>;
          })
        : null;

    return ele;
  }
}

export default App;
