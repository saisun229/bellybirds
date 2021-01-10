import React, {useState} from "react";
import Header from "../Header";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
import { Button } from "@material-ui/core";
import { useButtonStyles, useTextFieldStyles } from "../../RootStyles";
import axios from "axios";
import {REGISTER_USER_ENDPOINT} from "../../endpoints";



export default function Register() {
    const buttonclasses = useButtonStyles();
    const textFieldClasses = useTextFieldStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser() {
        const requestObj = JSON.stringify({
            email, password
        })
    
        const res = await axios.post("http://localhost:1337/api/register", requestObj);

        console.log(res, "response after click on register");
    }


  return (
      <div className="register">
        <Header></Header>
        <div className="register__form">
        <h2>Register</h2>
        <form className={textFieldClasses.root} noValidate autoComplete="off">
           <TextField fullWidth id="filled-basic" placeholder="you@awesome.com" label="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
           <TextField fullWidth id="filled-basic" placeholder="p@$$w0rd" label="Your Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
           <Button fullWidth className={buttonclasses.secondary} onClick={registerUser} color="default" >Register</Button>
       </form>
    </div>
     </div>
  )
}