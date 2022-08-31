import React from "react";
import "./index.scss";

export const Item = ({item}) => {
  return (
    <div className="item product__item">
      <div className="items__title">Name: {item.title}</div>
      <div className="items__price">{item.price} $</div>
      <div className="items__color">Color: {item.color}</div>
      <div className="items__size">Size: {item.size}</div>
    </div>
  );
};
