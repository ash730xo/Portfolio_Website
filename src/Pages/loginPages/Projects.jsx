import React from 'react'

import '../../Styles/ProjectsLink.css'

import { Link } from 'react-router-dom'

function Projects() {
  return (
    <>
        <div className="ProjectNav">
          <Link to="/calculator" className="project_link1">Calculator Project</Link>
          <Link to="/loginScreen" className="project_link2">Login Screen</Link>
        </div>
    </>
    
  )
}

export default Projects