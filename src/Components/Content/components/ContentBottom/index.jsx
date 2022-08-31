import React from "react";
import { Socials } from "./components/Socials";
import "./index.scss";

export const ContentBottom = () => {
    return (
        <div className="content__bottom">
            <button className="btn btn_scroll">scroll down</button>
            <div className="content__bottom-view"></div>
            <Socials/>
        </div>
    )
}