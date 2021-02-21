import './style.scss';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import { store } from "../../redux";
import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ClickAwayListener } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Nav() {

  const history = useHistory();
  const state: any = store.getState();
  const isUserAvailable = state.user.email ? true : false;
  const classes = useStyles();

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);  
  };

  const handleClickAway = () => {
     setActive(false);
  };

  function redirectUserToLogin() {
    history.push("/login");
  }

  function redirectUserToRegister() {
    history.push("/register");
  }

  function redirectUserToChat() {
    isUserAvailable ? history.push("/chat") : history.push("/login");
  }

  function redirectUserToHome() {
    history.push("/");
  }

  function logoutUser() {
    window.localStorage.removeItem("token");
    store.dispatch({ type: 'getUser', user: { email: "", uname: "" } });
    history.push("/");
  }

  return (
    <nav className="nav">
      <div className="nav--home">
        <HomeIcon fontSize="large" onClick={redirectUserToHome}></HomeIcon>
      </div>
      <div className="nav--chat">
        <ChatIcon fontSize="large" onClick={redirectUserToChat}></ChatIcon>
      </div>
      <ClickAwayListener onClickAway={handleClickAway}>
      <div className="nav--account">
      
        <AccountCircleIcon fontSize="large" onClick={handleToggle}></AccountCircleIcon>
        <div  className={ isActive ? "nav--account-popup active" : "nav--account-popup"}>
          {
            isUserAvailable ? (
            <div className={classes.root}>
              <List component="nav" aria-label="user login logout">
                <ListItem button>
                  <ListItemText primary={ 'Hi ' + state.user.uname + '!'} />
                </ListItem>
                <ListItem button onClick={logoutUser}>
                  <ListItemText primary="Logout"/>
                </ListItem>
              </List>
            </div>) : (            
            <div className={classes.root}>
              <List component="nav" aria-label="user login logout">
                <ListItem button onClick={redirectUserToLogin}>
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem button onClick={redirectUserToRegister}>
                  <ListItemText primary="Register"/>
                </ListItem>
              </List>
            </div>)
          }
        </div>
        
      </div>
      </ClickAwayListener>
    </nav>
  )
}