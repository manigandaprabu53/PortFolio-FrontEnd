import React from 'react'
import './Skills.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reacrjs from '../assets/react-js.png'
import nodejsicon from '../assets/nodejs.png'
import mongodb from '../assets/mongodb.png'
import bootstrap from '../assets/bootstrap.png'
function Skills() {
  return (
    <div className='skill-wrapper'>
        <h2>Skills</h2>
        <div className="skill-content">
            <img src={html} alt="HTML5 Icon"/>
            <img src={css} alt="CSS3 Icon"/>
            <img src={javascript} alt="Javascript Icon" />
            <img src={reacrjs} alt="ReactJs Icon"/>
            <img src={nodejsicon} alt="Node Js Icon"/>
            <img src={mongodb} alt="MongoDB Icon"/>
            <img src={bootstrap} alt="MongoDB Icon"/>
        </div>
    </div>
  )
}

export default Skills