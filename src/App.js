import React, { Component } from "react";
import math from "mathjs";
import RandomClick from "./RandomClick";
import ListBuilder from "./ListBuilder";
import InputForm from "./InputForm";
class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null
    };
  }
  addName(name) {
    this.setState({
      names: [...this.state.names, name]
    });
  }
  handleClick() {
    const length = this.state.names.length;
    const randomNumber = math.randomInt(length);
    this.setState({ luckyWinnerIndex: randomNumber });
  }
  render() {
    return (
      <div>
        <h1 id="app-title">Hello random name picker</h1>
        <RandomClick handleClick={() => this.handleClick()} />
        <InputForm addName={name => this.addName(name)} />
        <ListBuilder
          list={this.state.names}
          luckyWinnerIndex={this.state.luckyWinnerIndex}
        />
      </div>
    );
  }
}

export default App;
