import React, { useState } from 'react'
import './Expirence.css'
function Expirence() {

  const [data, setData] = useState([
    {
      title: "Infosys 2021 - 2024 Present",
      description: "Experienced Linux System Administrator with 3+ years of hands-on expertise in managing and optimizing Linux servers. Skilled in security hardening, troubleshooting, and system monitoring."
    }
  ])

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