import React from "react";
// import Radium from "radium";

const person = (props) => {

  return (
      <div className={props.class} 
      >
      <h1 onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old.
      </h1>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

// export default Radium(person);
export default person;
 