import React from "react";
// import { nanoid } from 'nanoid'

const ContactList =({contacts})=> {
return(
    <div>
    <h2>Contacts</h2>
    <ul>
    {contacts.map(({name, number, id}) =>
         (
            <li key={id}>{name}:{number}</li>
        )
    )}
    </ul>
  </div> 
)
};

export default ContactList;