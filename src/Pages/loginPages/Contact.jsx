import React from 'react'

import githubPhoto from '../../Images/github.jpg'
import linkedinPhoto from '../../Images/linkedin.jpg'
import emailPhoto from '../../Images/email.jpg'

function Contact() {

  const imageClicked = event => {
    console.log(event.target)
    console.log("Send an email to Ashley")
  }


  return (
    <div>
      {/* What we want to display */}

      <div className = "github_contact">
        <a href="https://github.com/ash730xo" target="_blank" rel="noreferrer" >
          <img src={githubPhoto} alt="github" height="200px"></img>
        </a>
      </div>
      <div className = "linkedIn_contact">
        <a href="https://www.linkedin.com/in/ashleymillsqu/" target="_blank" rel="nonreferrer">
          <img src={linkedinPhoto} alt="linkedin" height="215px"></img>
        </a>
      </div>
      <div className = "email_contact">
        <a href="mailto:ash730@gmail.com?subject='Job Inquiry" >
          <img src={emailPhoto} alt="Email" height="200px" onClick={imageClicked}></img>
        </a>
      </div>
    </div>
  )
}

export default Contact