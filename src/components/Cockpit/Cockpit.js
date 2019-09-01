import React, { useEffect } from "react";

import "./Cockpit.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");

    // Http Request ...

    const timer = setTimeout(() => {
      console.log("Http Request, save data to cloud");
      // alert("Saved data to cloud!");
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup in useEffect");
    };
  }, [props.persons]);

  let btnClass = "";
  const assignedClasses = [];

  if (props.showPersons) {
    btnClass = "Red";
  }

  if (props.persons.length <= 2) {
    assignedClasses.push("red");
  }

  if (props.persons.length <= 1) {
    assignedClasses.push("bold");
  }

  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
