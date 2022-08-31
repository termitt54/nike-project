import React from "react";
import { Color } from "./Components/Color";
import { Size } from "./Components/Size";
import "./index.scss";

export const Card = ({card, setColorValue, setSizeValue}) => {

  const color = (e) => {
    setColorValue(e)
  }

  const size = (e) => {
    setSizeValue(e)
  }


  return (
    <div className="card content__card">
      <div className="card__info">
        <div className="card__info-subtitle">{card.subtitle}</div>
        <div className="card__info-title">{card.title}</div>
        <div className="card__info-description">{card.describtion}</div>
        <div className="card__info-video">
          <button className="btn btn_play"></button>
          <div className="card__info-video-text">pLAY VIDEO</div>
        </div>
      </div>
      <div className="card__picture">{card.picture}</div>
      <div className="card__parameters">
        <div className="size__title">Select Size (us)</div>
        <Size sizeValue={size}/>
        <div className="color__title">Select Color</div>
        <Color setValueColor={color}/>
      </div>
    </div>
  );
};
