import React, { Component } from 'react';
import './style.css'
import { any } from 'prop-types';
import Input from './Labelandinput/Input';
class Login extends Component<any,any> {
    constructor(props:any)
    {
        super(props);
        this.state = {
            value :''
        }
  
        
    }
    render() { 
        return (
            <div className ='login'>
            <form>
                <h1>Login</h1>
                <Input text="Enter your Name"></Input><br/>
                <Input text="Enter your Password"></Input>

            <button className='button' onClick ={this.validate}>Login</button>
            </form>
            </div>
          );
    }
    validate = (evt:any) =>{
       this.state ={value: evt.target.value};
  if(this.state.value.length === 0) return alert("hello")
 

    }
}
 
export default Login;