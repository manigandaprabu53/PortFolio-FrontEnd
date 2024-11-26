import React, { useEffect, useState } from 'react'
import Card from './MediaCard'
import './MyWorks.css'
import axios from 'axios'

function MyWorks() {
    const [projects, setProjects] = useState([])

    const getData = async ()=>{
      try {
        let res = await axios.get("https://portfolio-backend-inrj.onrender.com/projects/getProjects/");
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