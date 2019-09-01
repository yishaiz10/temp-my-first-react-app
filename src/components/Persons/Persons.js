import React from "react";

import "./Persons.css";
import Person from "./Person/Person";

const persons = props => {
  console.log(["Persons.js rendering ...", props]);
  return (
    <div>
      {props.persons.map((person, index) => {
        return (
          <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={index}
            changed={event => props.changed(event, person.id)}
          />
        );
      })}
    </div>
  );
};

export default persons;
