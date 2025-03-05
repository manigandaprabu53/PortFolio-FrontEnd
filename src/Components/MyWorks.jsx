import React, { useEffect, useState } from 'react'
import Card from './MediaCard'
import './MyWorks.css'
import eventPlanning from "../assets/event-planning.jpg";
import blogger from "../assets/blogger.png";
import notes from "../assets/sticky-note.png"
import binkeyIt from "../assets/Binkeyit.png"
import axios from 'axios'

function MyWorks() {
    const [projects, setProjects] = useState([
      {
        title: "Event Management",
        description: "This project is about event management service. Anyone can become a event organizer and showcase their ability and create events and can sell their tickets.",
        githubFrontEnd: "https://github.com/manigandaprabu53/Event-Management-FrontEnd",
        githubBackend: "https://github.com/manigandaprabu53/Event-Management-BackEnd",
        livePage: "https://eventmanagementfrontend.netlify.app/",
        thumbnail: eventPlanning
      },

      {
        title: "Blog App",
        description: "In this blog app anyone can register and start to read others blog and we can also write a blog",
        githubFrontEnd: "https://github.com/manigandaprabu53/Blog-Frontend",
        githubBackend: "https://github.com/manigandaprabu53/Blog-Backend",
        livePage: "https://myblinkitapp.netlify.app/",
        thumbnail: blogger
      },

      {
        title: "Online Notes",
        description: "Notes can be taken on Web Application without installing any App",
        githubFrontEnd: "https://github.com/manigandaprabu53/PortFolio-FrontEnd",
        githubBackend: "https://github.com/manigandaprabu53/Notes-App-Backend",
        livePage: "https://onlinenotesapplication.netlify.app/",
        thumbnail: notes
      },

      {
        title: "BlinkIt Ecommerce Site",
        description: "Users will be able to by the products by Paying using stripe. This project is built with MERN stack Technology.",
        githubFrontEnd: "https://github.com/manigandaprabu53/Blinkit-FrontEnd",
        githubBackend: "https://github.com/manigandaprabu53/Blinkit-Backend",
        livePage: "https://myblinkitapp.netlify.app/",
        thumbnail: binkeyIt
      }
    ])

    // const getData = async ()=>{
    //   try {
    //     let res = await axios.get("https://portfolio-backend-inrj.onrender.com/projects/getProjects/");
    //     if(res.status == 200){
    //       console.log(res.data.data);
    //       setProjects(res.data.data);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // useEffect(()=>{
    //   getData();
    // }, [])

  return (
    <div className='mywork-wrapper'>
      <h2>Projects</h2>
      <div className="mywork-container">
          {
            projects.length ? projects.map((e)=>{
              return <Card data={e}/>
            }) : <h3>Projects Not Available</h3>
          }
      </div>
    </div>
  )
}

export default MyWorks