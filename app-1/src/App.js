import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      textBox: '',
    }
  }
  updateText = (input) => {
  this.setState({textBox: input})
  }
  render() {
    return (
      <div className='App'>
      <input className='inputBox' onChange={e => this.updateText(e.target.value)}/>
      <div className='resultText'>Text Here: {this.state.textBox}</div>
      </div>
    );
  }
}

export default App;
