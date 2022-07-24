import React from "react";
import NakeAirEdge270 from "../../../../assests/img/AirEdge270.png"

import "./index.scss";

const Oval = () => {
    return (
        <div className="oval content__oval">
            <img className="oval__img" src={NakeAirEdge270} alt="" />
            <button className="oval__view-control"></button>
        </div>
    )
}

export default Oval;