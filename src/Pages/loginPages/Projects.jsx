import React from 'react'

import '../../Styles/ProjectsLink.css'

import { Link } from 'react-router-dom'

import Skills from '../../Components/Skills'

function Projects() {
  return (
    <>
        <div className="ProjectNav">
          <Link to="/calculator" className="project_link1">Calculator Project</Link>
          <Link to="/loginScreen" className="project_link2">Login Screen</Link>
        </div>

        <div>
        <Skills />
        </div>
        
    </>
    
  )
}

export default Projects