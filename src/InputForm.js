import React from "react";
import App from "./App"

class InputForm extends App {
  constructor() {
    super();
    this.state = {
      names: ""
    };
  }
  render(){
      console.log('in Inpurform',props)
      return(
            <div>
                Enter name:
                <input type="text" value={this.state.names}/>
            </div>
      )
  }
}
export default InputForm;
