import React from "react";
import "./index.scss";
import logo from "../../assets/img/logo.svg"
import { Navigation } from "./components/Navigation";
import { ButtonControls } from "./components/ButtonControls";

export const Header = ({cart, cartActive, setCartActive}) => {
    return (
        <section className="header">
            <div className="header__logo"><img src={logo} alt="Nike" /></div>
            <Navigation/>
            <ButtonControls cart={cart} cartActive={cartActive} setCartActive={setCartActive}/>
        </section>
    )
}