import React from 'react'
import './App.css'

// import Login_page from './Components/Login_page'
import Navbar from './Components/navbar'
import {Route, Routes} from 'react-router-dom'

import About from './Pages/loginPages/About'
import Home from './Pages/loginPages/Home'
import Contact from './Pages/loginPages/Contact'
import Projects from './Pages/loginPages/Projects'
import Calculator from './Components/Calculator'
import Login_page from './Components/Login_page'


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
          <Route path="/calculator" element={<Calculator />}/>
          <Route path="/loginScreen" element={<Login_page />}/>
        </Routes>
      </nav>
      
        {/* <Login_page /> */}
    </>
  )
}

export default App
