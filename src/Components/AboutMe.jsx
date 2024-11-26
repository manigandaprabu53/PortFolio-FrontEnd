import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.jpg'
import Button from '@mui/material/Button';
import './AboutMe.css'
import gmail from '../assets/gmail.png'

function AboutMe() {

  return <>
    <div className="container" id='aboutME'>
        <img src={img1} alt=""  className='photo'/>
        <div className="about">
            <h2>Manigandaprabu Vedachelam</h2>
            <h3>Mern Stack Developer</h3>
            <p>Passionate and results-driven Full-Stack Developer with expertise in building dynamic web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Looking to apply my skills to develop innovative web solutions and contribute to a collaborative development team.
            </p>
              <p className='contact'><img src={gmail} alt="Gmail Icon"/><a href="mailto:manigandaprabu53@gmail.com">manigandaprabu53@gmail.com</a></p>
              <a href={gmail} download><Button variant="contained" color="success">Download Resume</Button></a>
        </div>
    </div>
  </>
}

export default AboutMe