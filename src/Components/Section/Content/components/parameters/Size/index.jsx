import React from "react";
import SizeRadio from "./components/Radio";

import "./index.scss";

const Size = () => {
    return (
        <div className="size parameters__size">
            <div className="size__title">Select Size (us)</div>

            <SizeRadio/>
        </div>
    )
};

export default Size;