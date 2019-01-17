import React, { Component } from 'react';
import './style.css'
import { any } from 'prop-types';
import Input from './Labelandinput/Input';
class Register extends Component <any,any>{
    constructor(props:any)
    {
        super(props);
        this.state = {
            name:'',
            password:'',
            confpass:'',
            phnum:''
        }
  
        
    }
    render() { 
        return (
            <div className ='login'>
            <form onSubmit={this.handleSubmit} noValidate>
            <h1>Registration Form</h1>
            <Input text="Enter your Name" itype ="text" textCheck ={this.handleName}></Input><br/>
            <Input text="Enter your Password" itype ="text" textCheck ={this.handlePassword}></Input>
            <Input text="Confirm your Password" itype ="text" textCheck ={this.handleConfpass}></Input><br/>
            <Input text="Enter your MobileNum" itype ="text"></Input><br/>
            <button className='button' onSubmit ={this.validate}>Register</button>
            </form>
            </div>
          );
    }
    validate = (evt:any) =>{
      // this.state ={value: evt.target.value};
 //alert(this.state.password);
 // console.log("hiii");
 //console.log(this.state.password);
  //console.log(this.state.confpass);
  console.log(this.state.name);
  console.log(this.state.password);
  console.log(this.state.confpass);

    }
    handleName =(evt:any) =>
    {
        this.setState({name: evt.currentTarget.value})
       // console.log(this.state.name)
    } 
    handlePassword =(evt:any) =>
    {
        this.setState({password: evt.currentTarget.value})
        //console.log(this.state.password);
    } 
    handleConfpass =(evt:any)=>
    {
        this.setState({confpass: evt.currentTarget.value})
    }
    handleSubmit =(evt:any)=>
    {
        console.log(this.state.name)
        console.log(this.state.password)
        console.log(this.state.confpass)

    }
}
 
export default Register;