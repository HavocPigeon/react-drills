import React, { Component } from 'react';

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      userName: '',
      passWord: '',
    }
  }
  updateUserName = (input) => {
    this.setState({
      userName: input
    })
  updatePassword = (input) =>
    this.setState({
      passWord: input
    })
    

  }
  render() {
    return (
      <div className="App">
       <input className='userName' onChange={e => this.updateUserName(e.target.value)}/>
       <input className='passWord' onChange={e => this.updatePassword(e.target.value)}/>
       <button className='button' onClick={() => {logInfo()}}>Login</button>
      </div>
    );
  }
}
