import React, {Component} from 'react';

export default function NewTask(props){
        return(
            <button onClick={ props.handleAddTask }>Add</button>
        )
    }
