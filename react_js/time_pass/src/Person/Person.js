import React from "react";

const person = (props) => {
  return (
    <div className={props.class} onClick={props.click}>
      <h1>
        I'm {props.name} and I'm {props.age} years old.
      </h1>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
 