import React, { Component } from "react";
import math from "mathjs";
import RandomClick from "./RandomClick";
class componentName extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null
    };
  }
  render() {
    return (
      <div>
        <h1 id="app-title">Hello random name picker</h1>
        <ul>
          {this.state.names.map((value, i) => {
           return this.state.luckyWinnerIndex === i ? (
              <li id="winner"> {value}</li>
            ) : (
              <li> {value}</li> //used ternary operator
            );
          })}
        </ul>
        {/* <h3>{this.state.names[this.state.luckyWinnerIndex]}</h3> */}
        <RandomClick handleClick={() => this.handleClick()} />
      </div>
    );
  }
  handleClick() {
    const length = this.state.names.length;
    const randomNumber = math.randomInt(length);
    this.setState({ luckyWinnerIndex: randomNumber });
    //this.setState({ luckyWinnerIndex: math.randomInt(this.state.names.length) });
  }
}

export default componentName;
