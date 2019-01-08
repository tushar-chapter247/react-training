import React, { Component } from "react";
import "./char.css";

class Char extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.removeEle = this.removeEle.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let newList = [...prevState.list];
    newList = nextProps.name.split("");
    return {
      list: newList
    };
  }

  removeEle(index) {
    this.props.removeFromInput(index);
  }

  render() {
    return (
      <div>
        <h1>Char component</h1>
        <ul>
          {this.state.list.map((key, index) => {
            return (
              <li
                onClick={() => this.removeEle(index)}
                key={index}
                className="char-list"
              >
                {key}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Char;
