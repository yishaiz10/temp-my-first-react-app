import React from "react";
import "./Person.css";

const person = props => {


  return (
    <div className="Person">
      <p onClick={props.click}>I'm a Person, and my name is : {props.name} </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;

{
  /* <br></br>
my books cost is {props.booksCount * props.bookCost} 
<br></br>
my children : {props.children} */
}
