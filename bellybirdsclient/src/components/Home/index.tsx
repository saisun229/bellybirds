import React from "react";
import Header from "../Header";
import './style.scss';
import Link  from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";
import { store } from "../../redux";


export default function Home() {
  const history = useHistory();

  const state: any = store.getState();
  const isUserAvailable = state.user.email ? true : false

  function redirectUserToChat() {
    isUserAvailable ? history.push("/chat") : history.push("/login");
  }

  return (
    <div className="home">
      <Header></Header>
      <div className="home__navigation">
        <h6>Home Page, Coming soon...</h6>
        <Link component="button"  onClick={redirectUserToChat}>Link to Live Chat</Link>
      </div>
    </div>
  )
}