import './App.css';
import React, { useState } from 'react';



let arr = [0,1,2,3,4,5,6,7,8,9];
let arr2 = ['=','+','-','*','/','.','AC',]
export default class App extends React.Component {
  render(){
    return(
      <div>   
         
    <Calculator />
      </div>
      
    )
  }
}
const Calculator = () => {
  let [display, setDisplay] = useState(0); 
 

 const updateState = e => {
   if(display === 0){
    setDisplay(e.target.value);
   }else{
  setDisplay(display + e.target.value ) 
   }
 }
  const operations = e => {
   let value = e.target.value;
   let displayArr = [];
   parseFloat(display);
   if(value === '=') {
     displayArr.push(display);
     eval(displayArr);
    setDisplay(eval(...displayArr));
   }else if(value === '+'){
    setDisplay(display + ' + ');    
   }else if(value === '-'){
     setDisplay(display + ' - ');
   }else if(value === '*'){
     setDisplay(display + ' * ');
   }else if(value === '/'){
     setDisplay(display + ' / ')
   }else if(value === '.'){
     let DecimalArr = display.split(' ')
     if(DecimalArr.hasOwnProperty('.')){
       setDisplay(display)
     }else {
     setDisplay(display + '.')
     }
   }else if(value === 'AC'){
     setDisplay(0);
   }
  }
  
  return(
    <>
    <div id="display">{display}</div>
    <div>
    {arr.map(num => <button onClick={updateState} value={num} id={num}>{num}</button>)}
    </div>
    <div>
    {arr2.map(i => <button onClick={operations} value={i} id={i}>{i}</button>)}
    </div>
    </>
  )
}

