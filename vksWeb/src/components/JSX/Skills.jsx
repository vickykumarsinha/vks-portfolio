import React from 'react'
import '../CSS/Skills.css'
import { useRef } from 'react'
import reactjs from '../../assets/react.svg'
import java from '../../assets/java.png'
import js from '../../assets/javascript.svg'
import node from '../../assets/nodejs.svg'
import mongo from '../../assets/mongodb.svg'
import sql from '../../assets/mysql.svg'

const Skills = () => {

  const skill = useRef(null);
  return (
    <section className='skill' id='Skills'>
        <div className='skill-head'> 
            Skills
        </div>
        <div className='skill-div'>
            <div className='svg-border'>
            <img src={java} className='java' />
            Java
            </div>
            <div className='svg-border'>
            <img src={reactjs} className='react' />
            ReactJS
            </div>
            <div className='svg-border'>
            <img src={js} className='js' />
            JavaScript
            </div>
            <div className='svg-border'>
            <img src={node} className='node' />
            NodeJS
            </div>
            <div className='svg-border'>
            <img src={mongo} className='mongo' />
            mongoDB
            </div>
            <div className='svg-border'>
            <img src={sql} className='sql' />
            MySQL
            </div>

        </div>
    </section>
  )
}

export default Skills