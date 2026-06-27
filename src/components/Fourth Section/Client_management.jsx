import React from 'react'
import './Client_management.css'

const Client_management = () => {
  return (
    <div>
        <section className='client-section'>
    <div className='client-management'>
    
        <div className='client-image'>
            <img src='https://imgs.search.brave.com/X7ykAnzi7qjo1YB6tkbMClWrZZzUantP3PUp5NOup9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZWR1Y2JhLmNvbS9h/Y2FkZW15L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzEyL0Ns/aWVudC1NYW5hZ2Vt/ZW50LmpwZw' alt='image'></img>
        </div>
        <div className='client-container'>
        <h2>2.Client Management</h2>
        <p>The trainer can manage all client records in one place.</p>
        <h3 style={{marginTop:"5%",marginLeft:"10px"}}>Function Include</h3>
        <ul className='client-function'>
            <li>Add new client</li>
            <li>Update client details</li>
            <li>Delete client</li>
            <li>View client profile</li>
        </ul>
    </div>
    </div>
    </section>
    </div>
  )
}

export default Client_management