import React from "react";
import Oval from "./components/oval";
import ScrollDown from "./components/ScrollDown";
import Socials from "./components/Socials";

import "./index.scss"

const ContentBottom = () => {
    return (
        <div className="bottom content__bottom">
            <ScrollDown/>
            <Oval/>
            <Socials/>
        </div>
    )
};

export default ContentBottom;