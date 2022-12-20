import React, { Component } from "react";
import "./App.css";
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

    const style = {
      border: "1px solid black",
      backgroundColor: "grey",
      color: "white",
      font: "inherit",
      padding: "8px",
      cursor: "pointer",
      // ":hover": {
      //   backgroundColor: "black",
      // },
    };

    // let classes = ['red', 'bold'].join(' ');// "red bold"

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("underline");
    }

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                class="heading"
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
      style.backgroundColor = "white";
      style.color = "black";
      // style[":hover"] = {
      //   backgroundColor: "grey",
      // };
    }

    return (
      // <StyleRoot>
        <div className="App">
          <h1 className={classes.join(" ")}>I'm a React Developer.</h1>
          <button onClick={this.togglePersonHandler} style={style}>
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
