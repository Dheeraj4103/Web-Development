import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Dheeraj", age: 20 },
      { name: "Suraj", age: 24 },
      { name: "Sujay", age: 25 },
      { name: "Suryansh", age: 15 },
    ],
  };
  count = 0;

  switchNameHandler = (newName) => {
    if (this.count === 0) {
      this.count = 1;
      console.log("count is 0");
      this.setState({
        persons: [
          { name: newName, age: 20 },
          { name: "Suraj", age: 24 },
          { name: "Sujay", age: 25 },
          { name: "Suryansh", age: 20 },
        ],
      });
    } else {
      this.count = 0;
      console.log("count is 1");
      this.setState({
        persons: [
          { name: "Dheeraj", age: 20 },
          { name: "Suraj", age: 24 },
          { name: "Sujay", age: 25 },
          { name: "Suryansh", age: 15 },
        ],
      });
    }
  };

  changeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Dheeraj", age: 20 },
        { name: event.target.value, age: 24 },
        { name: "Sujay", age: 25 },
        { name: "Suryansh", age: 15 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid black",
      padding: "10px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>I'm a React Developer.</h1>
        <Person
          class="heading"
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={() => {
            this.switchNameHandler("Dhruv");
          }}
        />
        <Person
          class="heading"
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => {
            this.switchNameHandler("Dhruv");
          }}
          changed={this.changeHandler}
        >
          My hobbies: Racing
        </Person>
        <Person
          class="heading"
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={() => {
            this.switchNameHandler("Dhruv");
          }}
        />
        <Person
          class="heading"
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
          click={() => {
            this.switchNameHandler("Dhruv");
          }}
        />
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Dhruv")}
        >
          Switch Names
        </button>
      </div>
    );
  }
}

export default App;
 