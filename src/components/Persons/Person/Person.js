import React, { Component } from "react";

import "./Person.css";

// const person = props => {
import Aux from "../../../hoc/Auxiliary";

class Person extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Person.js] shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Person.js] getSnapshotBeforeUpdate", prevProps, prevState);
    return { message: "Snapshot !" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Person.js] componentDidUpdate");
    console.log({ snapshot });
  }

  render() {
    console.log("[Person.js] rendering ...", this.props);
    return (
      // <Aux>
      <React.Fragment>
        {/* <div className="Person"> */}
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        {/* </div> */}        
        </React.Fragment>
    );
  }
}

export default Person;
