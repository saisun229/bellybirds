import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../Header";
import { useButtonStyles } from "../../RootStyles";
import './style.scss';
import { store } from "../../redux";
import { useHistory } from "react-router-dom";


export default function Home() {
  const state: any = store.getState();
  const isUserAvailable = state.user.email ? true : false;

  const classes = useButtonStyles();
  const history = useHistory();

  function logoutUser() {
    window.localStorage.removeItem("token");
    store.dispatch({type: 'getUser', user: { email: "", uname: ""}});
    history.push("/");
  }

  return (
    <div className="home">
      <Header></Header>
      <div className="home__navigation">
        {
          isUserAvailable ? (
            <div className="home__navigation__buttons">
              <Button className={classes.secondary} onClick={logoutUser} color="default" >Logout</Button>
            </div>) : (<div className="home__navigation__buttons">
              <Button variant="contained" className={classes.primary} component={Link} to="/login" color="primary">Login</Button>
              <Button component={Link} className={classes.secondary} to="/register" color="default" >Register</Button>
            </div>)
        }

      </div>
    </div>
  )
}