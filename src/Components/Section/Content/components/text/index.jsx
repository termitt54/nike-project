import React from "react";
import VideoButton from "./components/Video";

import "./index.scss";

const TextContent = () => {
  return (
    <div className="text content__text">
      <h3 className="subtitle text__subtitle">Men's Shoe</h3>
      <h1 className="title text__title">Nike Air Edge 270</h1>
      <p className="description text__description">
        The Nike Air Edge 270 takes the look of retro basketball and puts it
        through a modern lens.
      </p>

      <VideoButton/>
    </div>
  );
};

export default TextContent;
