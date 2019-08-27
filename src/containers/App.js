import React, { Component } from "react";
import "./App.css";

// import Person from "../components/Persons/Person";
// import Persons from "../components/Persons";

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

  // togglePersonsHandler = () => {
  //   const doesShow = this.state.showPersons;
  //   this.setState({ showPersons: !doesShow });
  // };

  render() {
    // const style = {
    //   backgroundColor: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer"
    // };

    // let persons = null;

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* <p>This is really working!</p> */}

        {/* <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons} */}
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />

        {/* nameChangedHandler
  deletePersonHandler = personIndex => { */}
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
