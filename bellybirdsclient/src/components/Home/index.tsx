import React from "react";
import Header from "../Header";
import './style.scss';
import Link  from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";


export default function Home() {
  const history = useHistory()
  function redirectUserToChat() {
    history.push("/chat");
  }

  return (
    <div className="home">
      <Header></Header>
      <div className="home__navigation">
        <h6>Home Page, Coming soon...</h6>
        <Link component="button"  onClick={redirectUserToChat}>Link to Chat</Link>
      </div>
    </div>
  )
}