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
    id: nanoid(),
    ...data
  }
  this.setState(prevState => ({
    contacts:[contact, ...prevState.contacts]
  }))
}

changeFilter = e => { 
  return  this.setState({filter: e.currentTarget.value})

};


  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContact = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter) || contact.number.toLowerCase().includes(normalizedFilter));

    return (
      <div>
     <Form onSubmit ={this.formSubmitHendler}/>
     <h2>Contacts</h2>
     <Filter value={this.state.filter} onChange={this.changeFilter}/>
     <ContactList contacts={visibleContact}/>
     </div>
    )
  }
}
  

