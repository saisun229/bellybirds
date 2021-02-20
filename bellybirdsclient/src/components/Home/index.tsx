import React from "react";
import './style.scss';
import Banner from "../Banner";
import Main from "../Styleguide/Main";


export default function Home() {

  return (
    <div className="home">
      <Banner></Banner>
      <Main>
        <div className="home__navigation">
          <h6>Home Page, Coming soon...</h6>
        </div>
      </Main>
    </div>
  )
}