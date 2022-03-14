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
    if(e.target.value == arr[0]){
     setDisplay(0)
    }else{
      setDisplay(e.target.value)
    }
   }else if(display[display.indexOf(' ') + 3] == 0){
    if( e.target.value == 0){
      setDisplay(display)
      if(display[display.length -1] === '.'){
        setDisplay(display + e.target.value)
      }
    }else{
      setDisplay(display + e.target.value)
    }
   }else{
  setDisplay(display + e.target.value ) 
   }
 }
  const operations = e => {
   let value = e.target.value;
   let displayArr = [];
   displayArr.push(display)
   parseFloat(display);
   if(value === '=') {
    setDisplay(eval(...displayArr));
   }else if(value === '+'){
    let Result = eval(display)
    setDisplay(Result + ' + ');     
   }else if(value === '-'){ 
     if(display[display.length - 2] === '/' || display[display.length - 2] === '*'){
      setDisplay(display + '-')
     }else{
     let Result = eval(display)
     setDisplay(Result + ' - ');
     }
   }else if(value === '*'){
     let Result = eval(display)
     setDisplay(Result + ' * ');
   }else if(value === '/'){
     let Result = eval(display);
     setDisplay(Result + ' / ')
   }else if(value === '.'){
     let DecimalArr = display.split('');
     let index = DecimalArr.indexOf('+') + 1;
     let element = DecimalArr[index].split('');
     console.log(element)
     if(DecimalArr.includes('.') === false){
        setDisplay(display + '.');
     }else if(element){
       DecimalArr = display.split(' ');
      index = DecimalArr.indexOf('+') + 1;
      element = DecimalArr[index].split('')
      if(element.includes('.') === false){
        setDisplay(display + '.')
      } else {
        setDisplay(eval(display))
      }
     } else {
       setDisplay(display)

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

