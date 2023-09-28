import React from 'react'

import CalculatorTitle from './Calculator_components/CalculatorTitle'
import OutputScreen from './Calculator_components/OutputScreen'
import OutputScreenRow from './Calculator_components/OutputScreenRow'
import Button from './Calculator_components/Button'

function Calculator() {
  return (
    <div>
        <CalculatorTitle />
        <OutputScreen />
        <OutputScreenRow />
        <Button />
    </div>
  )
}

export default Calculator