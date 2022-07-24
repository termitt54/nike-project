import React from "react";

import "./index.scss";

const SizeRadio = () => {
  const radiosize = [
    {
      id: "radio1",
      name: "radio",
      text: 8,
    },

    {
      id: "radio2",
      name: "radio",
      text: 8.5,
    },

    {
      id: "radio3",
      name: "radio",
      text: 9,
    },

    {
      id: "radio4",
      name: "radio",
      text: 9.5,
    },

    {
      id: "radio5",
      name: "radio",
      text: 10,
    },

    {
      id: "radio6",
      name: "radio",
      text: 10.5,
    },

    {
      id: "radio7",
      name: "radio",
      text: 11,
    },

    {
      id: "radio8",
      name: "radio",
      text: 11.5,
    },

    {
      id: "radio9",
      name: "radio",
      text: 12,
    },

    {
      id: "radio10",
      name: "radio",
      text: 12.5,
    },
  ];

  return (
    <div className="radio-size">
      {radiosize.map(function (item) {
        return (
          <label className="radio-size__wrapper" htmlFor={item.id}>
            <input className="radio-size__input" type="radio" name={item.name} id={item.id} />
            <span className="radio-size__decorator">{item.text}</span>
          </label>
        );
      })}
    </div>
  );
};

export default SizeRadio;
