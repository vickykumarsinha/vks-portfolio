import React, { useState } from 'react'
import '../CSS/Contact.css'
import '../CSS/MainPage.css'
import emailjs from '@emailjs/browser'
import linked from '../../assets/linkedin-icon.svg'
import insta from '../../assets/insta.svg'
import git from '../../assets/github.svg'
import figma from '../../assets/figma.svg'


const Contact = () => {

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

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            email_id: email,
            subject: subject,
            message: message,
        }

        emailjs
            .send('vks', 'template_1cip4qp', templateParams, {
                publicKey: 'J_aHOX8sHKTRjlUzQ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Email sent successfully!');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send email. Please try again.');
                },
            );

    }

    return (
        <section className='contact'>
            <div className='left'>
                <p className='head'>Lets Connect</p>
                <p className='content'>I'm currently looking foreward to new opportunities, my inbox is always open. Whether you have any question or just want to drop hi, I'll try my best to reach to you!</p>
                <div className='social-sec'>
                    <img src={linked} alt=''className='linked' onClick={linkedopener}/>
                    <img src={git} alt=''className='git' onClick={gitopener}/>
                    <img src={figma} alt=''className='figma' onClick={figopener}/>
                    <img src={insta} alt=''className='insta' onClick={instaopener}/>
                </div>
                
            </div>
            <div className='right'>
                <form className="email-form" onSubmit={sendEmail} >
                    <p>Email</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email" required />
                    <p>Subject</p>
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject" required />
                    <p>Message</p>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message" required />
                    <button type="submit" value="Send">Send Mail</button>
                </form>
            </div>
        </section>
    )
}


export default Contact