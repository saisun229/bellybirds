import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Header from "../Header";
import './style.css';

const useStyles = makeStyles({
  secondary: {
    background: 'linear-gradient(45deg, #9ca20e 30%, #dacb1c 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
  },
  primary: {
    background: 'linear-gradient(45deg, #101010 30%, #171514 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
});

export default function Home() {
  const classes = useStyles();
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