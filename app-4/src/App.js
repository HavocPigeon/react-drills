import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userName: '',
      passWord: '',
    }
  }
  updateUserName(input){
    this.setState({
      userName: input
    })}
  updatePassword(input){
    this.setState({
      passWord: input
    })}
  logInfo = () => {
    alert('username ' + this.state.userName + ' password '+ this.state.passWord)
  }

  
  render() {
    return (
      <div className="App">
       <input className='userName' onChange={e => this.updateUserName(e.target.value)}/>
       <input className='passWord' onChange={e => this.updatePassword(e.target.value)}/>
       <button className='button' onClick={this.logInfo}>Login</button>
      </div>
    );
  }
}

export default App;
