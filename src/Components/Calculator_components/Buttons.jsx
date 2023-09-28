import React from 'react'

const Buttons = (props) => {
  return (
    <div> 
      <input type="button" value={props.label} />
    </div>
  )
}

export default Buttons