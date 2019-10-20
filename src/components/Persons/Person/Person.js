import React, { Component, Fragment } from "react";

import "./Person.css";
import PropTypes from "prop-types";

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

  // document.querySelector('input').focus();
  componentDidMount() {
    this.inputElement.focus();
  }

  render() {
    console.log("[Person.js] rendering ...", this.props);
    return (
      // <Aux>
      <Fragment>
        {/* <div className="Person"> */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={inputEl => {
            this.inputElement = inputEl;
          }}
        />
        {/* </div> */}
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};

export default Person;
