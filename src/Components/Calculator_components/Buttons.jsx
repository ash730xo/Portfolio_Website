import React from 'react'

const Buttons = (props) => {
  return (
    <div> 
      <input type="button" value={props.label} onClick = {props.handleClick}/>
    </div>
  )
}

export default Buttons