import React from 'react'
import {Link} from 'react-router-dom'

import '../Styles/Navbar.css'

function Navbar() {
  return (
    <>
        <div>
          <Link to="/home" className="navbar_Link">Home</Link>
          <Link to="/about" className="navbar_Link">About</Link>
          <Link to="/contact" className="navbar_Link">Contact</Link>
          <Link to="/projects" className="navbar_Link">Projects</Link>
        </div>
    </>
    
  )
}

export default Navbar