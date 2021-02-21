import React from "react";
import './style.scss';
import Banner from "../Banner";
import Main from "../Styleguide/Main";
import Card from "../Styleguide/Card";


export default function Home() {

  return (
    <div className="home">
      <Banner></Banner>
       <Main>
        <Card></Card>
        </Main>
    </div>
  )
}