import React from "react";
import logo from "../assests/img/logo.svg";
import Nav from "./components/Nav";
import HeaderControls from "./components/buttons";

import "./index.scss";

const Header = () => {
    return (
        <section className="header">
            <img src={logo} alt="" />
            <Nav/>
            <HeaderControls/>
        </section>
    )
}

export default Header;