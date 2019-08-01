import React from 'react';

const person = (props) => {
    return(
        <div>
            <p onClick={props.click}>{props.name}</p>
            <input type = "text" onChange={props.changed} value={props.name}></input>
        </div>
        
    );
}

export default person;  