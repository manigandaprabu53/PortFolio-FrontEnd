import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.jpg'
import Button from '@mui/material/Button';
import './AboutMe.css'
import gmail from '../assets/gmail.png'
import axios from 'axios';

function AboutMe() {

  const [data, setData] = useState([]);

  const getData = async ()=>{
    try {
      let res = await axios.get("https://portfolio-backend-inrj.onrender.com/data/getAboutMe");
      if(res.status == 200){
        console.log(res.data.data)
        setData(res.data.data)
      }
    } catch (error) {
      
    }
  }

  useEffect(()=>{

    getData();
  }, [])

  return <div className="container" id='aboutME'>
        {/* <img src={img1} alt=""  className='photo'/>
        <div className="about">
            <h2>Manigandaprabu Vedachelam</h2>
            <h3>Mern Stack Developer</h3>
            <p>Passionate and results-driven Full-Stack Developer with expertise in building dynamic web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Looking to apply my skills to develop innovative web solutions and contribute to a collaborative development team.
            </p>
              <p className='contact'><img src={gmail} alt="Gmail Icon"/><a href="mailto:manigandaprabu53@gmail.com">manigandaprabu53@gmail.com</a></p>
              <a href={gmail} download><Button variant="contained" color="success">Download Resume</Button></a>
        </div> */}
        {
          data.map((e)=>{
            return <>
              <img src={e.image} alt=""  className='photo'/>
              <div className="about">
                <h2>{e.firstName+" "+e.lastName}</h2>
                <h3>{e.stack}</h3>
                <p>{e.aboutMe}</p>
                  <p className='contact'><img src={gmail} alt="Gmail Icon"/><a href={`mailto:${e.email}`}>manigandaprabu53@gmail.com</a></p>
                  <a href={e.resume} download><Button variant="contained" color="success">Download Resume</Button></a>
              </div>
            </>
          })
        }
    </div>
}

export default AboutMe