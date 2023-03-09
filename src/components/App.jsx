import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";


export class App extends Component{

  state = {
    contacts: [],
    filter: ''
  }

formSubmitHendler = data =>{
  console.log(data);
 
  console.log(this.state.contacts);
  const contact = {
    id: nanoid,
    name:'', 
    number: ''
  }
  this.setState(prevState => ({
    contacts:[contact, ...prevState.contacts]
  }))
}

changeFilter = e => { 
  return  this.setState({filter: e.currentTarget.value})

};


  render() {

    return (
      <div>
     <Form onSubmit ={this.formSubmitHendler}/>
     <h2>Contacts</h2>
     <Filter value={this.state.filter} onChange={this.changeFilter}/>
     <ContactList contacts={this.state.contacts}/>
     </div>
    )
  }
}
  

