import React from 'react'

import CalculatorTitle from './Calculator_components/CalculatorTitle'
import OutputScreen from './Calculator_components/OutputScreen'
import Buttons from './Calculator_components/Buttons'

class Calculator extends React.Component {
  render() {
    return (
      <div className="frame">
        <CalculatorTitle value="Practice Calculator" />
        <div class="mainCalc">
          <OutputScreen />
          <div className="button-row">
            <Buttons />
            <Buttons />
            <Buttons />
            <Buttons />
          </div>
          
        </div>
      </div>
    )
  }
}

export default Calculator