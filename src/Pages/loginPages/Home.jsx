import React from 'react'

import '../../Styles/Home.css'

import home_Photo from './../../Images/home.jpg'

function Home() {
  return (
    <div className='home'>
      <img src={home_Photo} alt="home_photo"/>
    </div>
  )
}

export default Home