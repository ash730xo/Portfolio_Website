import React from 'react'

import githubPhoto from '../../Images/github.jpg'

function Contact() {
  return (
    <div>
      {/* What we want to display */}

      <div className = "github_contact">
        <a href="https://github.com/ash730xo" target="_blank" rel="noreferrer" >
          <img src={githubPhoto} alt="github" height="200"></img>
        </a>
      </div>
      <div className = "linkedIn_contact">
        <a href="" ></a>
      </div>
      <div className = "email_contact">
        <a href="" ></a>
      </div>
    </div>
  )
}

export default Contact