import './App.css';
import React from 'react';
import Buttons from './calcButtons';
import Calculations from './calculations';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
     result: '0', 
    }
  }      
  render(){
    return(
      <div>
        <div id="display">{this.state.result}</div>
        <Buttons />
        <Calculations />
      </div>
    )
  }
}

