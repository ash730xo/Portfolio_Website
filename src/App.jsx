import React from 'react'
import './App.css'

import Login_page from './Components/Login_page'
import Navbar from './Components/navbar'
import {Route, Routes} from 'react-router-dom'

import About from './Pages/About'
import Home from './Pages/home'
import Contact from './Pages/contact'
import Projects from './Pages/projects'


function App() {

  return (
    <>
      <Navbar />
      <nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </nav>
      
        <Login_page />
    </>
  )
}

export default App
