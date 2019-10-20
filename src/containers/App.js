import React, { Component } from "react";

import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);

    console.log("[App.js]");
  }

  state = {
    persons: [
      { id: "aascas1", name: "Max", age: 28 },
      { id: "sdvsdv2", name: "Manu", age: 29 },
      { id: "svds3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: true,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App.js] componentDidUpdate");
    console.log({ snapshot });
  }

  nameChangedHandler = (event, id) => {
    console.log(id);

    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });

    const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    /* 
    this.setState({
      persons: persons,
      changeCounter: this.state.changeCounter + 1
    });
 */

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: this.state.changeCounter + 1
      };
    });
  
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
    console.log("[App.js] render");
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
        <button onClick={() => this.setState({ showCockpit: false })}>
          Remove Cockpit
        </button>

        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          ></Cockpit>
        ) : null}
        {persons}
        <div>changes : {this.state.changeCounter}</div>
      </div>
    );
  }
}

export default App;

// getSnapshotBeforeUpdate(prevProps, prevState) {
//   console.log("[Person.js] getSnapshotBeforeUpdate", prevProps, prevState);
//   return { message: "Snapshot !" };
// }

// componentWillMount(){
//   console.log("[App.js] componentWillMount");
// }

{
  /* <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button> */
}
