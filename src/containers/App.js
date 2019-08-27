import React, { Component } from "react";

// import "./App.css";
import classes from './App.css';

// import Person from '../components/Persons/Person/Person';
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "aascas1", name: "Max", age: 28 },
      { id: "sdvsdv2", name: "Manu", age: 29 },
      { id: "svds3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    console.log(id);

    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });

    const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1); // remove one element
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = "";

    btnClass = classes.Red;

    // const style = {
    //   // backgroundColor: "green",
    //   font: "inherit",
    //   color: "#fff",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   height: "55px",
    //   width: "200px"
    // };

    const assignedClasses = [];

    if ( this.state.persons.length <= 2 ) {
      // debugger;
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( this.state.persons.length <= 1 ) {
      
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }
    console.log({ assignedClasses });

    // let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

// if (this.state.showPersons) {
//   persons = (
//     <div>
//       {this.state.persons.map((person, index) => {
//         return (
//           <Person
//             click={() => this.deletePersonHandler(index)}
//             name={person.name}
//             age={person.age}
//             key={index}
//             changed={event => this.nameChangedHandler(event, person.id)}
//           />
//         );
//       })}
//     </div>
//   );
// }

// switchNameHandler = newName => {
//   // console.log('Was clicked!');
//   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//   this.setState({
//     // persons: [
//     //   { name: newName, age: 28 },
//     //   { name: "Manu", age: 29 },
//     //   { name: "Stephanie", age: 27 }
//     // ],
//     showPersons: false
//   });
// };
