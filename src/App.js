import React, { Component } from "react";
import math from "mathjs";
import RandomClick from "./RandomClick";
import ListBuilder from "./ListBuilder";
class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null
    };
  }
  handleClick() {
    const length = this.state.names.length;
    const randomNumber = math.randomInt(length);
    this.setState({ luckyWinnerIndex: randomNumber });
    //this.setState({ luckyWinnerIndex: math.randomInt(this.state.names.length) });
  }
  handleInputChange = event => {
    this.setState = {
      value: event.target.value
    };
  };
  handleSubmit=(event)=> {
    event.preventDefault();
    const moreNames= this.state.names.slice();
    moreNames.push(this.state.names);
    this.setState({
      names:moreNames
    });
    console.log('handlesubmit',this.state.names)
  }
  render() {
    return (
      <div>
        <h1 id="app-title">Hello random name picker</h1>
        <ListBuilder
          list={this.state.names}
          luckyWinnerIndex={this.state.luckyWinnerIndex}
        />
        <RandomClick handleClick={() => this.handleClick()} />
        <form onSubmit={(event)=>this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleInputChange} />
          <button  type="submit">Add more Names</button>
        </form>
      </div>
    );
  }
}

export default App;
