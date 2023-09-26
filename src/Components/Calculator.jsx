import React from 'react'
import '../Styles/Calculator.css'

function Calculator() {

    function handleButton() {
        console.log("Ive been clicked")
    }

  return (
    <div className='calculator_container'>
        <div className="textbox_output">
            <input type="text" readOnly/>
        </div>

        <div className='button_container'>
        <div className="row1">
            <button onClick={handleButton}>0</button>
            <button onClick={handleButton}>.</button>
            <button onClick={handleButton}>=</button>
        </div>
        <div className="row2">
            <button onClick={handleButton}>1</button>
            <button onClick={handleButton}>2</button>
            <button onClick={handleButton}>3</button>
            <button onClick={handleButton}>+</button>
        </div>
        <div className="row3">
            <button onClick={handleButton}>4</button>
            <button onClick={handleButton}>5</button>
            <button onClick={handleButton}>6</button>
            <button onClick={handleButton}>-</button>
        </div>
        <div className="row4">
            <button onClick={handleButton}>7</button>
            <button onClick={handleButton}>8</button>
            <button onClick={handleButton}>9</button>
            <button onClick={handleButton}>*</button>
        </div>
        <div className="row5">
            <button onClick={handleButton}>AC</button>
            <button onClick={handleButton}>/</button>
        </div>

        </div>

    </div>
  )
}

export default Calculator