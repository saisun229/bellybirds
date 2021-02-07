import React, { useState } from "react";
import Header from "../Header";
import './style.scss';
import { TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useButtonStyles, useTextFieldStyles } from "../../RootStyles";
import { axiosApiCall } from "../../utility";
import { LOGIN_USER_ENDPOINT } from "../../endpoints";
import Alerts from "../Styleguide/Alerts";


export default function Login() {
    const buttonclasses = useButtonStyles();
    const textFieldClasses = useTextFieldStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("");
    const history = useHistory();

    async function loginUser(): Promise<void> {
        try {
            const response: any = await axiosApiCall(LOGIN_USER_ENDPOINT, { email, password });
            setSeverity(response.status);
            setText(response.message)
            //TODO: bad practice --> refresh tokens
            window.localStorage.setItem("token", response.token);
            if (response.status === "success") {
                history.push("/chat");
            }
        } catch (e) {
            setSeverity("error");
            setText("Unexpected Error occured");
        }
    }

    return (
        <div className="login">
            <Header></Header>
            <div className="login__form">
                <Alerts severity={severity} text={text}></Alerts>
                <h2>Login</h2>
                <form className={textFieldClasses.root} noValidate autoComplete="off">
                    <TextField id="filled-basic" placeholder="you@awesome.com" label="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
                    <TextField id="filled-basic" placeholder="p@$$w0rd" label="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                    <Button fullWidth className={buttonclasses.secondary} onClick={loginUser} color="default" >Login</Button>
                </form>
            </div>
        </div>
    )
}