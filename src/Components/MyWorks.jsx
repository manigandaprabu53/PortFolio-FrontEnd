import React, { useEffect, useState } from 'react'
import Card from './MediaCard'
import './MyWorks.css'
import axios from 'axios'

function MyWorks() {
    const [projects, setProjects] = useState([
        {
          title: "Event Management",
          description: "This project is about event management service. Anyone can become a event organizer and showcase their abily and create events and can sell their tickets.",
          thumbnail: "https://res.cloudinary.com/dreamworth-in/image/upload/v1502875248/event-planning.jpg",
          github: "https://github.com/manigandaprabu53/Event-Management-FrontEnd",
          livePage: "https://eventmanagementfrontend.netlify.app/"
        },
        {
          title: "Landing Page",
          description: "This page is react landing page is created only with front end.",
          thumbnail: "https://media.licdn.com/dms/image/C4E12AQEBVCR2SpRr9g/article-cover_image-shrink_720_1280/0/1625909824541?e=2147483647&v=beta&t=Y_zSoI8cPUR3wQvPyYK15PLWpQJJ0si6OvsuXFnIC18",
          github: "https://github.com/manigandaprabu53/ReactLandingPage",
          livePage: "https://react-landingpagetask.netlify.app/"
        }
    ])

    const getData = async ()=>{
      try {
        let res = await axios.get("http://localhost:8000/projects/getProjects/");
        if(res.status == 200){
          console.log(res.data.data);
          setProjects(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      getData();
    }, [])

  return (
    <div className='mywork-wrapper'>
      <h2>My Works</h2>
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