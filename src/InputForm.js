import React, { Component } from "react";

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      inputNames: ""
    };
  }
  handleChange(event) {
    this.setState({
      inputNames: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log("new name", this.state.inputNames);
    const newName = this.state.inputNames;
    this.props.addName(newName);
    this.setState({
      inputNames: ""
    });
    console.log("in handlesubmit", newName);
  };
  render() {
    console.log("in Inpurform");
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          Enter name:
          <input
            type="text"
            value={this.state.inputNames}
            onChange={event => this.handleChange(event)}
          />
          <button>Add more Names</button>
        </form>
      </div>
    );
  }
}
export default InputForm;
