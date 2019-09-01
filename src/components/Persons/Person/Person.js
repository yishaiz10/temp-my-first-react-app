import React, { Component } from "react";

import "./Person.css";

class Person extends Component {
  // const person = props => {

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
      <div className="Person">
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
