import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <div className='footer-section'>
            <div className='Quick-links'>
                <h4>Quick Links</h4>
                <p>Home</p>
                <p>Dashboard</p>
                <p>About</p>
                <p>Gallery</p>
            </div>

            <div className='community'>
                <h4>Community</h4>
                <p>Explore</p>
                <p>Help Center</p>
                <p>Education</p>
                <p>Blog</p>
            </div>
            <div className='about'>
                <h4>About</h4>
                <p>Company</p>
                <p>Career</p>
                <p>Features</p>
                <button>CONTACT US</button>
            </div>
        </div>
    </div>
  )
}

export default Footer