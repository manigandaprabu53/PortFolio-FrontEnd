import React, { useEffect, useState } from 'react'
import './Expirence.css'
import axios from 'axios'

function Expirence() {

  const [data, setData] = useState([
    {
      title: "Infosys 2021 - 2024 Present",
      description: "Experienced Linux System Administrator with 3+ years of hands-on expertise in managing and optimizing Linux servers. Skilled in security hardening, troubleshooting, and system monitoring."
    }
  ])

  const getData = async ()=>{
    try {
      let res = await axios.get("http://localhost:8000/experience/getExperience/");
      if(res.status == 200){
        console.log(res.data.data)
        setData(res.data.data)
      }else{
        console.log(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData();
  }, [])

  return <>

    <div className="exp-wrapper">
        <h2>Experience</h2>
        {
          data.map((e)=>{
            return (
              <div className='content'>  
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </div>
            )
          })
        }
    </div>
  </>
}

export default Expirence