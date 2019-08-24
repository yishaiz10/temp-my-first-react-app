import React from 'react';
// import logo from './logo.svg';
import './App.css';

import  Person from './Person/Person'


function App() {
  return (
    <div className="App">
      <h1>My first react app</h1>
      <Person name="aaa" booksCount={4} bookCost={30} ></Person>
      <Person name="person with children" booksCount={4} bookCost={30} >i am a children !!!</Person>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>
  );
}

export default App;
