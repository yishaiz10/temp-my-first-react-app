// import React, { Component } from "react";
import React, { useState } from "react";

import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Yishai", age: 30 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other state"
  });

  const addPersonHandler = () => {
    const persons = personsState.persons;
    console.log("addPerson was clicked");

    persons[0].name = "react";
    persons.push({ name: "new person", age: 100 });

    console.table(persons);

    setPersonsState({ persons: persons });
  };

  return (
    <div className="App">
      <h1>My first react app</h1>

      <button onClick={addPersonHandler}>Add Person</button>

      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <hr />
      <h2> persons list</h2>
      {personsState.persons.map(person => {
        return (
          <Person
            name={person.name}
            // key={person.name}
            age={person.age}
          />
        );
      })}
    </div>
  );
};

export default app;

/*
class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Yishai", age: 30 },
      { name: "Stephanie", age: 26 }
    ]
  };

  addPersonHandler = () => {
    console.log("addPerson was clicked");

    this.state.persons[0].name = "react";
    this.state.persons.push({ name: "new person", age: 100 });

    console.table(this.state.persons);

    this.setState({ persons: this.state.persons });
  };

  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>

        <button onClick={this.addPersonHandler}>Add Person</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <hr />
        <h2> persons list</h2>
        {this.state.persons.map(person => {
          return <Person name={person.name} age={person.age} />;
        })}

        <hr />

        <Person name="aaa" booksCount={4} bookCost={30} />
        <Person name="person with children" booksCount={4} bookCost={30}>
          i am a children !!!
        </Person>
      </div>
    );
  }
}
export default App;
*/
