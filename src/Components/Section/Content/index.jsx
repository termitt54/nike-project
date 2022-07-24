import React from "react";
import ParametersContent from "./components/parameters";
import TextContent from "./components/text";

import "./index.scss";

const Main = () => {
    return (
        <div className="main content__main">
            <TextContent/>  
            <ParametersContent/>
        </div>
    )
}

export default Main;
