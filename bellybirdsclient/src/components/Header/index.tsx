import './style.scss';
import { useHistory } from "react-router-dom"
import logo from "./bellybird.png";
import {store} from "../../redux";

export default function Header() {
  const history = useHistory();

  const state: any = store.getState();
  const isUserAvailable = state.user.email ? true : false;

  function redirectUser() {
    history.push("/");
  }

  return (
    <header className="home__header">
      <h1 className="home__header__heading">Belly Birds</h1>

      <a className="home__header__logo" id="home__header__logo" href="/"  onClick={redirectUser}>
        <img src={logo} alt="PhoenixContact"/>
     </a>

      {
        !isUserAvailable ? "" :
        (<div className="home__header__username">Hi {state.user.uname}</div>)
      }
    </header>
  )
}