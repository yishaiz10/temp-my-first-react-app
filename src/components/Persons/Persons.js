// import React, { Component } from "react";
import React, { PureComponent } from "react";

import "./Persons.css";
import Person from "./Person/Person";

// const persons = props => {

class Persons extends PureComponent {


  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate", prevProps, prevState);
    return { message: "Snapshot !" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log({ snapshot });
  }


  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }


  render() {
    console.log("[Persons.js] rendering ...", this.props);
    return (
      <div>
        {this.props.persons.map((person, index) => {
          return (
            <Person
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              key={index}
              changed={event => this.props.changed(event, person.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default Persons;



  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps", props);
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextProps.persons !== this.props.persons){
  //     console.log("[Persons.js] shouldComponentUpdate");
  //     return true;
  //   }

  //   else{
  //     console.log("[Persons.js] shouldComponentUpdate - NO NEED TO UPDATE");
  //     return false;
  //   }
  // }

  
  // componentWillReceiveProps(props) {
  //   console.log("[Persons.js] componentWillReceiveProps", props);
  // }
