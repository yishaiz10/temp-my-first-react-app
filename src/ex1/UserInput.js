import React, { Component } from "react";
// import "./Requirements.css";

class UserInput extends Component {
  state = {
    content: ""
  };

  updateContent = event => {
    this.setState({ content: event.target.value });
  };

  emitUpdatedContent = () => {
    console.log({ props: this.props });
    this.props.changed(this.state.content);

    // this.setState({ content: event.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateContent.bind(this)}></input>
        <input
          type="button"
          // onClick={this.props.changed(this.state.content)}
          onClick={this.emitUpdatedContent}
          value="add content"
        ></input>
      </div>
    );
  }
}

export default UserInput;
