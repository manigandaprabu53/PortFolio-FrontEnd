import React, { useEffect, useState } from 'react'
import './Skills.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reacrjs from '../assets/react-js.png'
import nodejsicon from '../assets/nodejs.png'
import mongodb from '../assets/mongodb.png'
import bootstrap from '../assets/bootstrap.png'
import github from "../assets/github.png"
import axios from 'axios'


function Skills() {

  const [data, setData] = useState([]);

  const getData = async ()=>{
    try {
      let res = await axios.get("https://portfolio-backend-inrj.onrender.com/skills/getSkills/");
      if(res.status == 200){
        setData(res.data.data[0].icons)
      }else{
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData();
  }, [])
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
            <img src={github} alt="GitHub Icon"/>
            {/* {
              data.map((e)=>{
                return <img src={e} alt="" />
              })
            } */}
        </div>
    </div>
  )
}

export default Skills