import React, { Component } from "react";
import styles from "./App.css"
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/cockpit";

class App extends Component {
  state = {
    persons: [
      { name: "Dheeraj", age: 20, id: 1 },
      { name: "Suraj", age: 24, id: 2 },
      { name: "Suryansh", age: 15, id: 3 },
    ],
    showPersons: false,
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === index;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            class={styles.heading}
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
