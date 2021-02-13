import React from "react";
import Header from "../Header";
import './style.scss';
import Link from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";
import { store } from "../../redux";
import Main from "../Styleguide/Main";
import Nav from "../Nav";


export default function Banner() {

    return (
        <div className="banner">
            <Header></Header>
            <Nav></Nav>
        </div>
    )
}