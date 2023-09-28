import React from 'react'

import '../Styles/Calculator.css'

import CalculatorTitle from './Calculator_components/CalculatorTitle'
import OutputScreen from './Calculator_components/OutputScreen'
import Buttons from './Calculator_components/Buttons'


//create a calss component calculator
class Calculator extends React.Component {
  constructor() {
      super();

      //set our default state
      this.state = {
          question: '',
          answer: ''
  }

      //bind our handleClick method (sets 'this' explicitly
      //to refer to this component) we did this because 'this'
      //would refer to the source of the click events
  this.handleClick = this.handleClick.bind(this); 
}

  handleClick(event) {

      //get thhe value from the target element (button)
      const value = event.target.value;

      switch (value) {
          case '=': {

              //if its an equal sign, use eval module
              //to evalutate the question, convert the answer
              //(in number) to string

              if (this.state.question !=='')
              {
                  var ans='';
                      try
                          {
                              ans = eval(this.state.question);
                          }
                      catch(err)
                      {
                          this.setState({answer: "Math Error"});
                      }
                      if (ans===undefined)
                          this.setState({answer: "Math Error"});
                      
                      // update answer in our state

                      else
                          this.setState({answer: ans, question:''});
                      break;       
                  }
              }
              case 'Clear': {

                  //if its the clear sign, just clearn our 
                  //qusetion and answer in the state
                  this.setState({question: '', answer: ''});
                  break;
              }

              case 'Delete': {
                  var str = this.state.question;
                      str = str.substr(0, str.length-1);
                      this.setState({question: str})
                      break;
              }
          
          default: {
              
              //for every other command, update the answer in the state
              this.setState({question: this.state.question += value})
              break;
          }
      }
  }
  
  render()
  {
  return (
      <div className="frame">
      <CalculatorTitle value="Calculator Inspired GeeksforGeeks "/>
      <div class="mainCalc">
      <OutputScreen answer={this.state.answer} question={this.state.question}/>
      <div className="button-row">
          <Buttons handleClick={this.handleClick} label={'Clear'}/>
          <Buttons handleClick={this.handleClick} label={'Delete'}/>
          <Buttons handleClick={this.handleClick} label={'.'}/>
          <Buttons handleClick={this.handleClick} label={'/'}/>
      </div>
      <div className="button-row">
          <Buttons handleClick={this.handleClick} label={'7'}/>
          <Buttons handleClick={this.handleClick} label={'8'}/>
          <Buttons handleClick={this.handleClick} label={'9'}/>
          <Buttons handleClick={this.handleClick} label={'*'}/>
      </div>
      <div className="button-row">
          <Buttons handleClick={this.handleClick} label={'4'}/>
          <Buttons handleClick={this.handleClick} label={'5'}/>
          <Buttons handleClick={this.handleClick} label={'6'}/>
          <Buttons handleClick={this.handleClick} label={'-'}/>
      </div>
      <div className="button-row">
          <Buttons handleClick={this.handleClick} label={'1'}/>
          <Buttons handleClick={this.handleClick} label={'2'}/>
          <Buttons handleClick={this.handleClick} label={'3'}/>
          <Buttons handleClick={this.handleClick} label={'+'}/>
      </div>
      <div className="button-row">
          <Buttons handleClick={this.handleClick} label={'0'}/>
          <Buttons handleClick={this.handleClick} label={'='}/>
      </div>
      </div>
      </div>    
      );
  }
}


export default Calculator