import React from "react";
import FooterButton from "./components/FooterButton";
import Buy from "./components/FooterBuy";

import "./index.scss";

const Footer = () => {
    return (
        <section className="footer">
            <FooterButton/>
            <Buy/>
        </section>
    )
}

export default Footer;