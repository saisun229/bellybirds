import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../Header";
import { useButtonStyles } from "../../RootStyles";
import './style.css';


export default function Chat() {
  const classes = useButtonStyles();
  return (
    <div className="chat">
       <Header></Header>
    <div className="chat__wrapper">
        <p>Im here in chat page!</p>
    </div>
  </div>
  )
}