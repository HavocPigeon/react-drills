import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: '',
      arrayStrings: [
        'spaghetti',
        'ice-cream',
        'sushi',
        'bologna',
        'cheese',
      ]
    }}
    updateInput = (input) => {
      this.setState({
        userInput: input
      })
    }

    
  render() {
    let foodsToDisplay = this.state.arrayStrings.filter((element) => {
      return element.includes(this.state.userInput);
    }).map((element) => {
      return <h2>{element}</h2>
    })
    return (
      <div className="App">
      <input onChange={e => this.updateInput(e.target.value)}/>
      {foodsToDisplay}
               
      </div>
    );
  }
}

export default App;
