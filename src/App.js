import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) =>{
   const [personState, setPersonsState] = useState({
      persons: [
        {name:"qwerty"},
        {name:"asdfg"},
        {name:"zxcvb"}
      ],
      otherState: "Some value"
    });

    const [otherState, setOtherState] = useState('some other value')
    
    console.log("personState",personState)
    console.log("otherState",otherState)

    const switchNameHandler = (newName) => {
      console.log("switchHandler called");
      // this.state.persons[0].name = "Neeraj";  //Don't
      setPersonsState({
        persons: [
          {name:newName},
          {name:"asdfg"},
          {name:"zxcvb"}
        ],
        otherState: personState.otherState
      })
    }

    const nameShangeHandler = (event) => {
      setPersonsState({
        persons: [
          {name:event.target.value},
          {name:"asdfg"},
          {name:"zxcvb"}
        ]
      })
    }
  
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <p>Welcome</p>
        <button 
          style={style}
          onClick={ () => switchNameHandler("G") }>Switch Name</button>
        <Person name={ personState.persons[0].name }
                click = { switchNameHandler.bind(this, "Gupta1") } 
                changed = {nameShangeHandler} />
        <Person name={ personState.persons[1].name } />
        <Person name={ personState.persons[2].name } > Hi </Person>
      </div>
    );
  
  
  // return React.createElement('div', {className:App}, React.createElement('h1',null,'ReactApp'))
}

export default App;

// state = {
//   persons: [
//     {name:"qwerty"},
//     {name:"asdfg"},
//     {name:"zxcvb"}
//   ],
//   otherState: "Some value"
// }

// switchNameHandler = () => {
//   console.log("switchHandler called");
//   // this.state.persons[0].name = "Neeraj";  //Don't
//   this.setState({
//     persons: [
//       {name:"Neeraj"},
//       {name:"asdfg"},
//       {name:"zxcvb"}
//     ]
//   })
// }