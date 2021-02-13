import './style.scss';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import { store } from "../../redux";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link  from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
        color: '#000'
      },
    },
  }),
);
export default function Nav() {

  const history = useHistory();
  const state: any = store.getState();
  const isUserAvailable = state.user.email ? true : false;
  const classes = useStyles();

  function redirectToLogin() {
    history.push("/login");
  }

  function redirectToRegister() {
    history.push("/register");
  }

  function redirectUserToChat() {
    isUserAvailable ? history.push("/chat") : history.push("/login");
  }

  function redirectUserToHome() {
    isUserAvailable ? history.push("/") : history.push("/login");
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
     <div className="nav-account">
     <AccountCircleIcon fontSize="large"></AccountCircleIcon>
     </div>
     
      {/* {
        isUserAvailable ? (

          <div className="home__header__nav">
           <Typography className={classes.root}>
             <Link href="#" component="button" onClick={logoutUser}>Logout</Link>
             <Link href="#" component="button" onClick={redirectUser} color="inherit">Hi {state.user.uname}</Link>
          </Typography>
          </div>) : 
          (<div className="home__header__nav">
           <Typography className={classes.root}>
             <Link href="#" component="button"  onClick={redirectToLogin}  >Login</Link>
             <Link href="#" component="button"  onClick={redirectToRegister} >Register</Link>
          </Typography>
          </div>)

      } */}
   </nav>
  )
}