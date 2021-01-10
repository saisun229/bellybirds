import React from "react";
import Header from "../Header";
import './style.css';
import { TextField } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useButtonStyles, useTextFieldStyles } from "../../RootStyles";


export default function Register() {
    const buttonclasses = useButtonStyles();
    const textFieldClasses = useTextFieldStyles();
  return (
    <div className="login">
    <Header></Header>
    <div className="login__form">
        <h2>Login</h2>
        <form className={textFieldClasses.root} noValidate autoComplete="off">
           <TextField id="filled-basic" placeholder="you@awesome.com" label="Your Email" variant="outlined" />
           <TextField id="filled-basic" placeholder="p@$$w0rd" label="Your Password" variant="outlined" />
           <Button fullWidth component={Link} className={buttonclasses.secondary} to="/login" color="default" >Login</Button>
       </form>
    </div>
 </div>
  )
}