import React from "react";
import styles from "./Cockpit.css";

const cockpit = (props) => {
  let h1class = "";
  let btnclass = styles.btn;
  if (props.persons.length < 3) {
    h1class = styles.red_line;
  }
  if (props.showPersons) {
    btnclass = styles.toggle_btn;
  }
  console.log(styles);
  return (
    
    <div>
      <h1 className={h1class}>{props.title}</h1>
      <p>This really works!!</p>
      <button onClick={props.clicked} className={btnclass}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
