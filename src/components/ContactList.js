import React from "react";
import ContactCard from './ContactCard'
function ContactList(props){
    const renderContactList=props.contacts.map((items)=>{
        return(
            <ContactCard item={items}></ContactCard>
        )
    })
    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}
export default ContactList;