import React, { Component } from "react";

import "./Persons.css";
import Person from "./Person/Person";

class Persons extends Component {
  // const persons = props => {
  render() {
    console.log(["Persons.js rendering ...", this.props]);
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
