import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Dheeraj", age: 20, id: 1 },
      { name: "Suraj", age: 24, id: 2 },
      { name: "Suryansh", age: 15, id: 3 },
    ]
  });

  const [showPersonsState, setShowPersons] = useState(false);

  const togglePersonHandler = () => {
    const doesShow = showPersonsState;
    setShowPersons(!doesShow);
  };

  const nameChangeHandler = (event, index) => {
    const personIndex = personsState.persons.findIndex((p) => {
      return p.id === index;
    });
    const person = { ...personsState.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;
    setPersonsState({
      persons: persons
    });
  };

  let persons = null;

  if (showPersonsState) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              class="heading"
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => nameChangeHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>I'm a React Developer.</h1>
      {persons}
      <button onClick={togglePersonHandler}>Toggle Persons</button>
    </div>
  );
};

export default app;
