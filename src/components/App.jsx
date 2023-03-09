import React from "react";
import { Component } from "react";

import Form from "./Form";
import ContactList from "./ContactList";



export class App extends Component{

  state = {
    contacts: [],
    name: ''
  }

formSubmitHendler = data =>{
  console.log(data);
  this.state.contacts.push( data)
  console.log(this.state.contacts);
}

  render() {

    return (
      <div>
     <Form onSubmit ={this.formSubmitHendler}/>
     <ContactList contacts={this.state.contacts}/>
     </div>
    )
  }
}
  

