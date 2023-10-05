import React from 'react'

import '../../Styles/Contact.css'

import githubPhoto from '../../Images/github.jpg'
import linkedinPhoto from '../../Images/linkedin.jpg'
import emailPhoto from '../../Images/email.jpg'
import contactMe from '../../Images/contact.jpg'

function Contact() {

  const imageClicked = event => {
    console.log(event.target)
    console.log("Send an email to Ashley")
  }


  return (
    <div className="wholepage">
    <img src={contactMe} alt="Get in Touch!" className="getInTouch"></img>
    <div className="contact_Container">
      {/* What we want to display */}

      <div className = "github_contact">
        <a 
          href="https://github.com/ash730xo"
          target="_blank" 
          rel="noreferrer">
          <img 
            src={githubPhoto} 
            alt="github"></img>
          <label for="github"> Github </label>
        </a>
      </div>
      <div className = "linkedIn_contact">
        <a 
          href="https://www.linkedin.com/in/ashleymillsqu/" 
          target="_blank" 
          rel="nonreferrer">
          <img 
            src={linkedinPhoto} 
            alt="linkedin"></img>
          <label for="linkedin"> LinkedIn </label>
        </a>
      </div>
      <div className = "email_contact">
        <a 
          href="mailto:ash730@gmail.com?subject='Job Inquiry" >
          <img 
            src={emailPhoto} 
            alt="Email" 
            onClick={imageClicked}></img>
          <label for="Email"> Email </label>
        </a>
      </div>
    </div>
    </div>
  )
}

export default Contact