import React from 'react'




const person = (props) => {
    return( 
    <p>
        I'm a Person, and my name is : {props.name}
        <br></br>
        my books cost is {props.booksCount * props.bookCost} 
        <br></br>
        my children : {props.children}
        </p>
    )
};

export default person;