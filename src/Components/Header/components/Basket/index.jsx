import React from "react";
import closeIcon from "../../../assests/icon/close.png"

import "./index.scss";

const Basket = ({ active, setActive }) => {
  return (
    <div className={active ? "basket basket_active" : "basket"}>
      <div className="basket__content" onClick={(e) => e.stopPropagation()}>
        <button className="basket__close" onClick={() => setActive(false)}>
          <img className="basket__close-icon" src={closeIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Basket;
