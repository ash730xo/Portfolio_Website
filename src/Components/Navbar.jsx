import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div>
          <Link to="/home">Homr</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
        </div>
    </>
    
  )
}

export default Navbar