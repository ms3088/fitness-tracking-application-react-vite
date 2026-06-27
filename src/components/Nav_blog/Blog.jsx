import React from 'react'
import './Blog.css'
import Footer from '../Footer/Footer'
import Rights from '../Rights/Rights'

const Blog = () => {
  return (
     <div className="blog-container">
      <h1>Blog</h1>


      <section className="image-section">
        <img
          src="https://imgs.search.brave.com/J_XN8i5rO7H9BWStN4MQCWWHFbiWN_FJY-_e7EuE-0w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b21uaWNvbnZlcnQu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzA0L3Nva28t/YWJvdXQtdXMucG5n"
          alt="Gym trainer coaching"
          className="blog-image"
        />
      </section>

      <section className="blog-section">
        <h2>Our Mission</h2>
        <p>
          Trainova is designed to empower gym coaches with a smart dashboard 
          that simplifies workout planning, client tracking, and performance monitoring.
        </p>
      </section>

      <section className="blog-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Personalized workout plans creation</li>
          <li>Real-time client progress tracking</li>
          <li>Performance analytics and insights</li>
          <li>Seamless client communication tools</li>
        </ul>
      </section>

      <section className="blog-section image-section">
        <img
          src="/images/gym-trainer.jpg"
          alt="Gym trainer coaching"
          className="blog-image"
        />
      </section>

      <section className="blog-section">
        <h2>Contact Us</h2>
        <p>Email: support@trainova.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </section>
      <Footer/>
      <Rights/>
    </div>
  )
}

export default Blog