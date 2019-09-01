import React, { Component } from "react";

import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);

    console.log(["App.js"]);
  }

  state = {
    persons: [
      { id: "aascas1", name: "Max", age: 28 },
      { id: "sdvsdv2", name: "Manu", age: 29 },
      { id: "svds3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log(["App.js getDerviedStateFromProps", props]);
    return state;
  }

  componentDidMount(){
    console.log(["App.js componentDidMount"]);
  }

  // componentWillMount(){
  //   console.log(["App.js componentWillMount"]);
  // }

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
    console.log(["App.js render"]);
    let persons = null;

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
      <div className={"App"}>
        {/* <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button> */}
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        ></Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;
