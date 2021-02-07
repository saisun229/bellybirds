import React, {useState} from "react";
import Header from "../Header";
import { TextField } from '@material-ui/core';
import './style.scss';
import { Button } from "@material-ui/core";
import { useButtonStyles, useTextFieldStyles } from "../../RootStyles";
import {REGISTER_USER_ENDPOINT} from "../../endpoints";
import { axiosApiCall } from "../../utility";
import Alerts from "../Styleguide/Alerts";
import { useHistory } from "react-router-dom"



export default function Register() {
    const buttonclasses = useButtonStyles();
    const textFieldClasses = useTextFieldStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("");

    const history = useHistory();

    async function registerUser() {

        try {
            const response = await axiosApiCall(REGISTER_USER_ENDPOINT, {email, password});
            console.log("ressss", response);
            setSeverity(response.status);
            setText(response.message);
            if (response.status === "success") {
                history.replace("/chat");
            }
        } catch(e) {
            setSeverity("error");
            setText("Unexpected Error occured");
        }
    }


  return (
      <div className="register">
        <Header></Header>
        <div className="register__form">
        <Alerts severity= {severity} text={text}></Alerts>
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