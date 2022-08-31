import React from "react";
import { Card } from "./components/Card";
import { ContentBottom } from "./components/ContentBottom";
import "./index.scss";

export const Content = ({ card, setColorValue, setSizeValue }) => {
  const color = (e) => {
    setColorValue(e)
  }
  const size = (e) => {
    setSizeValue(e)
  }
  return (
    <section className="content">
      <Card card={card} setColorValue={color} setSizeValue={size}/>
      <ContentBottom/>
    </section>
  );
};
