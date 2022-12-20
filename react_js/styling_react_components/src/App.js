import React, { Component } from "react";
import styles from "./App.css";
import Person from "./Person/Person";
// import Radium, { StyleRoot } from "radium";

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
    // const persons = this.state.persons;
    // const persons = this.state.persons.slice();
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
    let btnClass = styles.press;
    // const style = {
    //   // ":hover": {
    //   //   backgroundColor: "black",
    //   // },
    // };

    // let classes = ['red', 'bold'].join(' ');// "red bold"

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.underline);
    }

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                class={styles.heading}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                click={() => {
                  this.deletePersonHandler(index);
                }}
              />
            );
          })}
        </div>
      );
      btnClass = styles.press_toggle
      // style[":hover"] = {
      //   backgroundColor: "grey",
      // };
    }

    return (
      // <StyleRoot>
        <div className={styles.App}>
          <h1 className={classes.join(" ")}>I'm a React Developer.</h1>
          <button onClick={this.togglePersonHandler} className={btnClass}>
            Toggle Persons
          </button>
          {persons}
        </div>
      // {/* </StyleRoot> */}
    );
  }
}

// export default Radium(App);
export default App;
