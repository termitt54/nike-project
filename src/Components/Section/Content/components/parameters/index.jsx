import React from "react";
import Size from "./Size";
import Colors from "./Colors";

import "./index.scss"

const ParametersContent = () => {
    return (
        <div className="parameters content__parameters">
            <Size/>
            <Colors/>
        </div>
    )
};

export default ParametersContent;