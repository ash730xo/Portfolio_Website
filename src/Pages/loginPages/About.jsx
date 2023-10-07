import React from 'react'

import selfPhoto from '../../Images/fakeSelfPhoto.jpg'

function About() {

  function projetsClick() {
    window.location.href = "/projects";
  }


  return (
    <div>
      <div>
        <h1> Welcome! My name is Ashley Mills </h1>
        <img src={selfPhoto} alt="Fake self Photo "></img>
      </div>

      <article>
        <h1>About Me Bio!</h1>
        <p>
        Adipisicing velit cupidatat anim ex velit dolore esse elit laborum ea laboris proident in mollit. 
        Dolor velit nulla nisi minim consectetur cupidatat officia dolore laboris. Elit commodo culpa id veniam eu dolore et proident. 
        Amet sit ad consectetur non dolor elit. Velit aliqua excepteur pariatur amet qui nisi ea cupidatat elit consectetur cillum quis do. 
        Sint non ad enim elit occaecat excepteur cillum id consectetur veniam.
        Eu amet et irure do anim. Reprehenderit enim aliqua velit ipsum duis ea culpa. 
        Nostrud proident voluptate nostrud fugiat duis dolore ipsum mollit cupidatat dolore consequat elit consectetur. 
        In in velit cillum ea laboris cupidatat dolore duis labore.
        Incididunt esse eiusmod labore id velit qui in pariatur. Enim adipisicing do reprehenderit laboris. Laborum pariatur sit anim ex Lorem ad. 
        Labore cillum nisi incididunt nisi est. Laboris do ea labore consequat laborum sint.</p>
      </article>

      <div>
        <h1> Goals </h1>
        <p> 
          Minim dolor laboris elit minim duis dolore laboris duis ullamco pariatur.
          Aute non sit velit nulla nisi cupidatat nisi sunt quis pariatur Lorem. 
          Fugiat anim cupidatat aliqua id aute cupidatat Lorem. Nostrud sunt in reprehenderit proident 
          incididunt mollit aute eiusmod velit.</p>
      </div>

      <button className="skills_button" onClick={projetsClick}> View Projects </button>
      
    </div>
  )
}

export default About