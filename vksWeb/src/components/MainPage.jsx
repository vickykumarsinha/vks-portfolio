import React from 'react'
import './MainPage.css'
import vks from '../assets/vks.png'
import x from '../assets/x.png'
import linked from '../assets/linkedin-icon.svg'
import insta from '../assets/insta.svg'
import git from '../assets/github.svg'
import figma from '../assets/figma.svg'

const MainPage = () => {

    const gitopener =() =>{
        window.open('https://github.com/vickykumarsinha', '_blank', 'noopener,noreferrer');
    }
    const linkedopener =() =>{
        window.open('https://www.linkedin.com/in/vicky-kumar-sinha-b546a01b4/', '_blank', 'noopener,noreferrer');
    }
    const figopener =() =>{
        window.open('https://www.figma.com/proto/SNHldt8ObFRlY83iMOpPBc/Untitled?t=qR7R6oDVkFJg9OM2-1', '_blank', 'noopener,noreferrer');
    }
    const instaopener =() =>{
        window.open('https://www.instagram.com/__v_k_s__/', '_blank', 'noopener,noreferrer');
    }

  return (
    <section className="page-sec" id='MainPage'>
        <div className="left-sec">
            <div>
                <div className='intro'>Hi, Myself</div>
                <div className='name'>Vicky Kumar Sinha</div>
                <div className='webd'>Java | Full Stack Developer | UI/UX Designer</div>
                <div className='social-sec'>
                    <img src={linked} alt=''className='linked' onClick={linkedopener}/>
                    <img src={git} alt=''className='git'  onClick={gitopener}/>
                    <img src={figma} alt=''className='figma' onClick={figopener}/>
                    <img src={insta} alt=''className='insta' onClick={instaopener}/>
                </div>
            </div>
        </div>


        <div className="right-sec">
            <div>
                <img src={vks} alt="" className="vks-img" />
            </div>
        </div>
    </section>
  )
}

export default MainPage