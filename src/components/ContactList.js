import React from "react";

const ContactList =({contacts, onDeleteContact})=> {
return(
    <div>
    
    <ul>
    {contacts.map((contact) =>{return (
    <li key={contact.id}>{contact.name}:{contact.number}
    <button type="submit" onClick={()=>onDeleteContact(contact.id)}> Delete</button>
    </li>
             )
    }
       
            
        
    )}
    </ul>
  </div> 
)
};

export default ContactList;