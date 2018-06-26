import React, {Component} from 'react';

export default function List(props){
    return(        <input value={props.input} 
                 placeholder="Enter new task" 
                 onChange={ (e) => props.handleInputChange( e.target.value ) }
          />)
    }
