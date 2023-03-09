import React from "react";
import { Component } from "react";
// import ContactList from "./ContactList";

 class Form extends Component{
state = {
    
    name: '',
    number: ''
}

handeleChange = e =>{
    const {name, value} = e.currentTarget
    this.setState({[name]: value});
    // this.state.contacts.push( [value])
  };

  handeleSubmite = e =>{
    e.preventDefault();
    this.props.onSubmit(this.state);
    // this.state.contacts.push( e.currentTarget.value)
    this.reset();
  }
reset = ()=> {
    this.setState({name: '',
    number: ''})
}

render() {
    return(
        <form onSubmit={this.handeleSubmite}
        style={{
         height: '100vh',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         fontSize: 40,
         color: '#010101'
       }}>
         <h2>Phonebook</h2>
       <input
       type="text"
       name="name"
       value={this.state.name}
       onChange={this.handeleChange}
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
       required
     />
         <input
       type="tel"
       name="number"
       value={this.state.number}
       onChange={this.handeleChange}
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       required
       />
     <button type="submit">Add contact</button>  
      
       </form>
       
    
)
}}
export default Form;