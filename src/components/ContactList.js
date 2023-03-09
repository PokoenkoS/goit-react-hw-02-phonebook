import React from "react";

const ContactList =({contacts})=> {
return(
    <div>
    
    <ul>
    {contacts.map((contact) =>{return (
    <li key={contact.id}>{contact.name}:{contact.number}</li>
             )
    }
       
            
        
    )}
    </ul>
  </div> 
)
};

export default ContactList;