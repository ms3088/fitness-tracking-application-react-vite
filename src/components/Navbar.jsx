import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {

  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">TRAINOVA</div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="blog">Blog</Link>
          <Link to="contact">Contact Us</Link>

          <button
            className="login"
            onClick={() => setShowModal(true)}
          >
            LOGIN
          </button>

          <button
            className="signup"
            onClick={() => setShowModal(true)}
          >
            SIGN UP
          </button>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;