import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../Header";
import { useButtonStyles } from "../../RootStyles";
import './style.scss';


export default function Home() {
  const classes = useButtonStyles();
  return (
    <div className="home">
       <Header></Header>
    <div className="home__navigation">
      <div className="home__navigation__buttons">
      <Button variant="contained" className={classes.primary}  component={Link} to="/login" color="primary">Login</Button>
      <Button component={Link} className={classes.secondary} to="/register" color="default" >Register</Button>
      </div>
    </div>
  </div>
  )
}