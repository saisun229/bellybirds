import React from "react";
import Header from "../Header";
import './style.scss';
import Nav from "../Nav";


export default function Banner() {

    return (
        <div className="banner">
            <Header></Header>
            <Nav></Nav>
        </div>
    )
}