import React from 'react'

import CalculatorTitle from './Calculator_components/CalculatorTitle'
import OutputScreen from './Calculator_components/OutputScreen'
import Buttons from './Calculator_components/Buttons'

class Calculator extends React.Component {
  constructor(){
    super();

    //sets out default state 
    this.state = {

      //sets questions & answer to a blank state
      question: '',
      answer: ''
    }

    this.handleClick = this.handleClick.bind(this)

    function handleClick (event) {
      const value = event.target.value;

      switch(value) {
          // if it's an equal sign, use the eval module
            // to evaluate the question ,convert the answer
            // (in number) to String
        case "=": {
          if( this.state.question !== "") {
            var ans =""
            try{
              ans = eval(this.state.question)
            } catch (err) {
              this.setState({answer: "Math Errpr"})
            }
            if (ans === undefined) this.setState ({ answer: "Math Error"})

            //updated answer in out answer state
            else this.setState( {answer: ans, question: "" })
            break;
          }

        }

        case "Clear": {

        }

        case "Delete": {

        }

        default: {

        }
      }
    }
  }


  render() {
    return (
      <div className="frame">
        <CalculatorTitle value="Practice Calculator" />
        <div class="mainCalc">
          <OutputScreen />
          <div className="button-row">
            <Buttons label={"Clear"}/>
            <Buttons label={"Delete"}/>
            <Buttons label={"."}/>
            <Buttons label={"/"}/>
          </div>
          <div className="button-row">
            <Buttons label={"7"}/>
            <Buttons label={"8"}/>
            <Buttons label={"9"}/>
            <Buttons label={"*"}/>
          </div>
          <div className="button-row">
            <Buttons label={"4"}/>
            <Buttons label={"5"}/>
            <Buttons label={"6"}/>
            <Buttons label={"-"}/>
          </div>
          <div className="button-row">
            <Buttons label={"1"}/>
            <Buttons label={"2"}/>
            <Buttons label={"3"}/>
            <Buttons label={"+"}/>
          </div>
          <div className="button-row">
            <Buttons label={"0"}/>
            <Buttons label={"="}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator