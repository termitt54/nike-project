import React from "react";
import { Item } from "./Components/Item";
import "./index.scss";

export const Cart = ({ active, setActive, cart = [] }) => {
  return (
    <div className={active ? "cart cart_active" : "cart"}>
      <div className="product cart__product">
        <div className={cart.length === 0 ? "empty" : "no-empty"}>
          The cart is empty
        </div>
        {cart.map(function (item) {
          return <Item item={item} />;
        })}
      </div>
      <div className="cart__buttons">
        <button className="btn btn_close" onClick={() => setActive(false)}>
          Close
        </button>
      </div>
    </div>
  );
};
