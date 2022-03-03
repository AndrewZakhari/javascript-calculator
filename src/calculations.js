 import React from "react";
 import './App.css'

 export default class Calculations extends React.Component{
     render(){
         return (
             <>
            <button id="equals">=</button>
            <button id="add">+</button> 
            <button id="subtract">-</button>
            <button id="multiply">*</button>
            <button id="divide">/</button>
            <button id="decimal">.</button>
            <button id="clear">AC</button>
             </>
         )
     }
 }