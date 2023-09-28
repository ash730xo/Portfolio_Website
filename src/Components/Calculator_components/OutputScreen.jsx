import React from 'react'

//imports Output Scrren row file
import OutputScreenRow from './OutputScreenRow'

function OutputScreen() {
  return (
    <div className="screen">
      <OutputScreenRow />
      <OutputScreenRow />
    </div>
  )
}

export default OutputScreen