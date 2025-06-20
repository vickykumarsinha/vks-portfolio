import React from 'react'
import '../CSS/Projects.css'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/Screenshot.png'

const Projects = () => {

    const pro1 =() =>{
        window.open('https://github.com/vickykumarsinha/vks-portfolio', '_blank', 'noopener,noreferrer');
    }
    const pro2 =() =>{
        window.open('https://github.com/vickykumarsinha/stone-paper-scissors', '_blank', 'noopener,noreferrer');
    }
    const pro3 =() =>{
        window.open('https://github.com/vickykumarsinha/synthai', '_blank', 'noopener,noreferrer');
    }
  return (

    <section className='project-sec' id='Projects'>
        <div className='skill-head'> 
            Projects
        </div>
        <div className='pro-div'>
            <div className='project'>
                <img src={project3} className='pro-img' onClick={pro3}/>
                SynthAI

                <ul>
                    <li>MERN Stack</li>
                    <li>Creative tool to build Reasearh papers from Scratch with AI based suggetions.
                    </li>
                </ul>
            </div>

            <div className='project'>
                <img src={project1} className='pro-img' onClick={pro1}/>
                Portfolio Website

                <ul>
                    <li>ReactJS, EmailJS, HTML, CSS</li>
                    <li>Responsive Single page Portfolio website using Reactjs.
                    </li>
                </ul>
            </div>

            <div className='project'>
                <img src={project2} className='pro-img' onClick={pro2}/>
                Stone, Papers & Scissors

                <ul>
                    <li>JavaScript, HTML, CSS</li>
                    <li> Game using concepts of JS and styled using CSS
                    </li>
                </ul>
            </div>
            
        </div>
    </section>
  )
}

export default Projects
