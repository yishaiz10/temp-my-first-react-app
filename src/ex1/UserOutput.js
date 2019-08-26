import React, { Component } from "react";
// import "./Requirements.css";

class UserOutput extends Component {
  state = {};

  render() {
    return <h2>output : {this.props.content}</h2>;
  }
}

export default UserOutput;
