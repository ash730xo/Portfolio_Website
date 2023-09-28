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
            <button label="0" onClick={handleButton}>0</button>
            <button label="." onClick={handleButton}>.</button>
            <button className="equals_button" label="=" onClick={handleButton}>=</button>
        </div>
        <div className="row2">
            <button label="1" onClick={handleButton}>1</button>
            <button label="2" onClick={handleButton}>2</button>
            <button label="3" onClick={handleButton}>3</button>
            <button label="+" onClick={handleButton}>+</button>
        </div>
        <div className="row3">
            <button label="4" onClick={handleButton}>4</button>
            <button label="5" onClick={handleButton}>5</button>
            <button label="6" onClick={handleButton}>6</button>
            <button label="-" onClick={handleButton}>-</button>
        </div>
        <div className="row4">
            <button label="7" onClick={handleButton}>7</button>
            <button label="8" onClick={handleButton}>8</button>
            <button label="9" onClick={handleButton}>9</button>
            <button label="*" onClick={handleButton}>*</button>
        </div>
        <div className="row5">
            <button label="AC" onClick={handleButton}>AC</button>
            <button label="/" onClick={handleButton}>/</button>
            <button className="delete_button" label="Delete" onClick={handleButton}>Delete</button>
        </div>

        </div>

    </div>
  )
}

export default Calculator