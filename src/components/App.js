import React from 'react';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactCard from './ContactCard'
import ContactList from './ContactList'

function App() {
  const contacts=[
    {
      id:"1",
      name:"dipesh",
      email:"malvia@gmail.com"
    },
    {
      id:"2",
      name:"rupesh",
      email:"rpsingh@gmail.com"
    },
   
  ]
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
    <ContactList contacts={contacts}/>
    {/* <ContactCard/> */}
    </div>
  );
}

export default App;
