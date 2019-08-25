import React from "react";

const person = props => {
  return (
    <div>
      <p onClick = {props.click}>I'm a Person, and my name is : {props.name} </p>
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
