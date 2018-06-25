import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      arrayStrings: [
        'spaghetti',
        'ice-cream',
        'sushi',
        'bologna',
      'cheese',
      ]
    }}
    
  render() {
    return (
      <div className="App">
       <h4> {this.state.arrayStrings.map(e => {
         return <div>{e}</div>
       })} </h4>
               
      </div>
    );
  }
  }

export default App;
