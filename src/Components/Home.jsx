import React, { useEffect } from 'react'
import AboutMe from './AboutMe.jsx'
import Navbar from './Navbar.jsx'
import Expirence from './Expirence.jsx'
import Skills from './Skills.jsx'
import MyWorks from './MyWorks.jsx'
import Footer from './Footer.jsx'
import { useLocation } from 'react-router-dom'

function Home() {
    const location = useLocation();
    
    useEffect(()=>{
        console.log(location)
        if(location.hash){
            console.log(location)
            const element = document.getElementById(location.hash.replace('#', ''));
            if(element){
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, [location])
  return (
    <div>
        <Navbar/>
        <div id="about"><AboutMe/></div>
        <div id='expirence'><Expirence/></div>
        <div id='skills'><Skills/></div>
        <div id='myworks'><MyWorks/></div>
        <div id='contact'><Footer/></div>
    </div>
  )
}

export default Home