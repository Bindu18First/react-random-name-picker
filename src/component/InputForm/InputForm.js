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
    const newName = this.state.inputNames;
    this.props.addName(newName);
    this.setState({
      inputNames: ""
    });
  };
  render() {
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
