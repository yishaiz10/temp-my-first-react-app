import React, { Component } from "react";
// import React, { useState } from "react";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

import "./App.css";

// import Person from "./Person/Person";
import Requirements from "./ex1/Requirements";

class App extends Component {
  state = {
    userName: "user1"
  };

  userNameChangedHandler = event => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>

        <Requirements></Requirements>

        <UserInput
          changed={this.userNameChangedHandler}
          currentName={this.state.userName}
        ></UserInput>

        <UserOutput userName={this.state.userName}></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>
      </div>
    );
  }
}
export default App;

/*
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

*/

/* switchNameHandler = newName => {
    console.log("switch name was clicked");

    const persons = this.state.persons;

    persons[0].name = newName;
    // this.name = newName;

    console.table(persons);

    this.setState({ persons: persons });
  };

  nameChangeHandler = event => {
    console.log("nameChangeHandler was clicked");

    const persons = this.state.persons;

    persons[2].name = event.target.value;

    console.log("new name", event.target.value);

    // this.name = newName;

    console.table(persons);

    this.setState({ persons: persons });
  };

  addPersonHandler = () => {
    console.log("addPerson was clicked");

    const persons = this.state.persons;

    persons.push({ name: "new person", age: 100 });

    console.table(persons);

    this.setState({ persons: persons });
  };
 */

/*  const style = {
      backgroundColor: "yellow",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor:'pointer'
    };




         <button onClick={this.switchNameHandler}>Switch Name</button> 
        <button onClick={this.addPersonHandler} style={style}>
          Add Person
        </button>
 
        {/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        /> 
         <hr />
        <h2> persons list</h2>
        {this.state.persons.map(person => {
          return (
            <Person
              name={person.name}
              age={person.age}
              // click={this.switchNameHandler.bind(this, 'my new name')}
              click={() =>
                this.switchNameHandler("my new name using arrow function")
              }
              changed={this.nameChangeHandler}
              // key={person.name}
            />
          );
        })}

        <hr />

 

 */

{
  /* <Person name="aaa" booksCount={4} bookCost={30} />
        <Person name="person with children" booksCount={4} bookCost={30}>
          i am a children !!!
        </Person> */
}

// persons: [
//   { name: "Max", age: 28 },
//   { name: "Yishai", age: 30 },
//   { name: "Stephanie", age: 26 }
// ]
