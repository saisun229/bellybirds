import React from "react";
import './style.scss';
import { useHistory } from "react-router-dom"
import logo from "./bellybird.png";

export default function Header() {
  const history = useHistory();

function redirectUser() {
  history.push("/");
}

  return (
    <header className="home__header">
      <h1 className="home__header__heading">Belly Birds</h1>

      <a className="home__header__logo" id="home__header__logo" href="/"  onClick={redirectUser}>
        <img src={logo} alt="PhoenixContact"/>
     </a>
    </header>
  )
}