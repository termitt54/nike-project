import React from "react";
import ColorsRadio from "./components/Radio";

import "./index.scss";

const Colors = () => {
    return (
        <div className="colors parameters__colors">
            <div className="colors__title">Select Color</div>

            <ColorsRadio/>
        </div>
    )
};

export default Colors;