import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {id:'1',name:"Neeraj"},
      {id:'2',name:"Kumar"}
    ],
    someState:"hello",
    showPersons: false,
  };

  

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons:[
  //       {name:newName},
  //       {name:'Kumar1'}
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  changeNameHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({},this.state.persons[personIndex])

    person.name = event.target.value; 

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons:persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }

  render(){
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            name = {person.name}
            key = {person.id}
            click = {()=>this.deletePersonHandler(index)}
            changed = {(event) => this.changeNameHandler(event,person.id)}
            />
          })}
          {/* <Person name={this.state.persons[1].name} click = {this.switchNameHandler.bind(this, 'Max')} />        
          <Person name={this.state.persons[0].name } changed={this.changeNameHandler}/> */}
        </div> 
      )
    }
    return (
      <div className="App">
        <h1>React App</h1>
        <button style={style} onClick= {this.togglePersonsHandler}>Click</button>
        {persons}
      </div>
    );
  }
  
}

export default App;
