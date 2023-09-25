import React from 'react'
import './App.css'

import Login_page from './Components/Login_page'
import Navbar from './Components/navbar'
import {Route, Routes} from 'react-router-dom'

import About from './Pages/About'


function App() {

  return (
    <>
      <Navbar />
      <nav>
        <Routes>
          <Route path="/" element={<About />}/>
        </Routes>
        </nav>
      
        {/* <Login_page /> */}
    </>
  )
}

export default App
