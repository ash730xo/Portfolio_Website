import React from 'react'

//arrow function
const OutputScreenRow = (props) => {
  return (
    <div className="screen-row">
      {/* Created a read only text box */}
      <input type="text" readOnly value={props.value}/>
    </div>
  )
}

export default  OutputScreenRow