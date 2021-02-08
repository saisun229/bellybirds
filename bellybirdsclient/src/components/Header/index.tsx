import './style.scss';
import { useHistory } from "react-router-dom"
import logo from "./bellybird.png";
import { store } from "../../redux";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link  from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

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

export default function Header() {
  const history = useHistory();
  const state: any = store.getState();
  const isUserAvailable = state.user.email ? true : false;

  // const classes = useButtonStyles();
  const classes = useStyles();

  function redirectUser() {
    history.push("/");
  }

  function redirectToLogin() {
    history.push("/login");
  }

  function redirectToRegister() {
    history.push("/register");
  }

  function logoutUser() {
    window.localStorage.removeItem("token");
    store.dispatch({ type: 'getUser', user: { email: "", uname: "" } });
    history.push("/");
  }

  return (
    <header className="home__header">
      <h1 className="home__header__heading">Belly Birds</h1>

      <a className="home__header__logo" id="home__header__logo" href="/" onClick={redirectUser}>
        <img src={logo} alt="PhoenixContact" />
      </a>

      {
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

      }
    </header>
  )
}