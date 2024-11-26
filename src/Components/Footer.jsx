import React from 'react'
import gmail from '../assets/gmail.png'
import './Footer.css'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className="footer-container">
          <section>
            <h3>About</h3>
            <p>I'm a mern stact developer and has the good expierence in React JS library and can write a maintainable code and also can modify the already written code.</p>
            <p>This page is designed and developed by <a href="https://www.linkedin.com/in/manigandaprabu-vedachelam">Manigandaprabu Vedachelam</a></p>
          </section>
          <section>
            <h3>Contact Me</h3>
            <p className='social-links'><img src={gmail} alt="Gmail Icon" className='footer-icons'/><a href="mailto:manigandaprabu53@gmail.com" target='_blank'>manigandaprabu53@gmail.com</a></p>
            <p className='social-links'><img src={linkedin} alt="Linkdin Icon" className='footer-icons'/><a href="https://www.linkedin.com/in/manigandaprabu-vedachelam/" target='_blank'>Manigandaprabu vedachelam</a></p>
            <p className='social-links'><img src={github} alt="Github Icon" className='footer-icons git'/><a href="https://github.com/manigandaprabu53" target='_blank'>manigandaprabu53</a></p>
          </section>
        </div>
    </div>
  )
}

export default Footer