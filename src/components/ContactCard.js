import React from "react";
import user from '../images/user.png'
const ContactCard=(props)=>{
    console.log(props)
    //this is object destructuring
    //to avoid writing props.item.name everytime
    //you can use const {id, email, name}= props.item
    //now  you can use only id, email, name
    return(
        <div className="item">
          <img className="ui avatar image"src={user} alt="user" />  
        <div className="content">
            <div className="header">{props.item.name}</div>
            <div>{props.item.email}</div>
        </div>
        <i className="trash alternate outline icon"></i>
        </div>
    )
}
export default ContactCard;