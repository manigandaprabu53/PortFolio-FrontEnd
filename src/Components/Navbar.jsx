import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {

  const handleToggle = ()=>{
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    navbarLinks.classList.toggle('active')
  }

  return <>
    <nav className="navbar">
        <div className="logo">
          <a href='#about'>Portfolio</a>
        </div>

        <a href='#nothing' className='hamburger' onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>

        <div className= "navbar-links">
          <ul>
            <li><Link to="#about">About Me</Link></li>
            <li><Link to="#expirence">Expierence</Link></li>
            <li><Link to="#skills">Skills</Link></li>
            <li><Link to="#myworks">My Works</Link></li>
            <li><Link to="#contact">Contact</Link></li>
            {/* <li><Link to='/dataForm'>Form</Link></li> */}
          </ul>
        </div>
    </nav>
  </>
}

export default Navbar