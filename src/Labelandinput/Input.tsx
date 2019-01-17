import React, { Component } from 'react';
 
export interface InputProps {
    
}
 
class Input extends Component <any, any>{
    state = {  }
    render() { 
    return ( 
        <React.Fragment>
        <label>{this.props.text}</label>
        <input placeholder ={this.props.text} type ={this.props.itype} onChange ={this.props.textCheck} ></input>
        </React.Fragment>
     );
    }
   handleInput =() =>
   {
       console.log("input changed");
   } 
}
export default Input;