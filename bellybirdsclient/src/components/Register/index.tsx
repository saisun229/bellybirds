import React, {useState} from "react";
import Banner from "../Banner";
import { TextField } from '@material-ui/core';
import './style.scss';
import { Button } from "@material-ui/core";
import { useButtonStyles, useTextFieldStyles } from "../../RootStyles";
import {REGISTER_USER_ENDPOINT} from "../../endpoints";
import { axiosApiCall } from "../../utility";
import Alerts from "../Styleguide/Alerts";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {store} from "../../redux";



export default function Register() {
    const buttonclasses = useButtonStyles();
    const textFieldClasses = useTextFieldStyles();

    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("");

    const history = useHistory();

    async function registerUser() {

        const patternMatched = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
        if (!patternMatched) {
           setSeverity("error");
           setText("Invalid Email Address"); 
           return false;
           }
         if(!password && password.length > 7) {
            setSeverity("error");
            setText("Password should be atleast 8 digits"); 
            return false;
         }  

        try {
            const response = await axiosApiCall(REGISTER_USER_ENDPOINT, {uname, email, password});
            console.log("ressss", response);
            setSeverity(response.status);
            setText(response.message);
            if (response.status === "success") {
                window.localStorage.setItem("token", response.token);
                const token: any = window.localStorage.getItem("token");
                const decoded: any = jwt_decode(token)
                store.dispatch({type: 'getUser', user: { email: decoded.email, uname: decoded.username}})
                history.push("/chat");
            }
        } catch(e) {
            setSeverity("error");
            setText("Unexpected Error occured");
        }
    }


  return (
      <div className="register">
        <Banner></Banner>
        <div className="register__form">
        <Alerts severity= {severity} text={text}></Alerts>
        <h2>Register</h2>
        <form className={textFieldClasses.root} noValidate autoComplete="off">
           <TextField fullWidth id="filled-basic" placeholder="John123" label="User Name" value={uname} onChange={(e) => setUname(e.target.value)} variant="outlined" />
           <TextField fullWidth id="filled-basic" placeholder="you@awesome.com" label="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
           <TextField fullWidth id="filled-basic" placeholder="p@$$w0rd" label="Your Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
           <Button fullWidth className={buttonclasses.secondary} onClick={registerUser} color="default" >Register</Button>
       </form>
    </div>
     </div>
  )
}