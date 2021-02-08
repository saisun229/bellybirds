import React from "react";
import Header from "../Header";
import './style.scss';
import Link  from '@material-ui/core/Link'


export default function Home() {


  return (
    <div className="home">
      <Header></Header>
      <div className="home__navigation">
        <h6>Home Page, Coming soon...</h6>
        <Link component="button" href="/chat">Link to Chat</Link>
      </div>
    </div>
  )
}