import React, { useContext } from 'react'
import '../CSS/NavBar.css'
import logo from '../../assets/vksg.png'
import resume from '../../assets/resume.pdf'
import { Link } from 'react-scroll'

const NavBar = () => {


  return (

    <section className='h-sec' id='NavBar'>
        <img src={logo} className='logo-img' alt='' />
      <ul className='list'>
        <li><Link to="MainPage" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li> <Link to="Skills" smooth={true} duration={500}>
          Skills
        </Link>
        </li>
        <li>
          <Link to="Projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li><Link to="job" smooth={true} duration={500}>
          Experience
        </Link>
        </li>
        <li><Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        </li>
      </ul>


      <a href={resume} download className="resume">Resume</a>
    </section>
  )
}

export default NavBar