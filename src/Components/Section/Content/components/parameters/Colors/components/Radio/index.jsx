import React from "react";

import "./index.scss";

const ColorsRadio = () => {
  const radiocolors = [
    {
      id: "radio11",
      name: "radio1",
      color: {
        backgroundColor: "rgba(182, 161, 121, 1)",
      },
    },

    {
      id: "radio12",
      name: "radio1",
      color: {
        backgroundColor: "rgba(39, 36, 37, 1)",
      },
    },

    {
      id: "radio13",
      name: "radio1",
      color: {
        backgroundColor: "rgba(99, 137, 203, 1)",
      },
    },

    {
      id: "radio14",
      name: "radio1",
      color: {
        backgroundColor: "rgba(242, 199, 88, 1)",
      },
    },

    {
      id: "radio15",
      name: "radio1",
      color: {
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
    },
  ];

  return (
    <div className="radio-colors">
      {radiocolors.map(function (item) {
        return (
          <label className="radio-colors__wrapper" htmlFor={item.id}>
            <input
              className="radio-colors__input"
              type="radio"
              name={item.name}
              id={item.id}
            />
            <span style={item.color} className="radio-colors__decorator">
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default ColorsRadio;
