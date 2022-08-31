import React from "react";
import "./index.scss";

export const Color = ({setValueColor}) => {
    const color = [
        {
            color: {backgroundColor: "#B6A179"},
            value: 'Orange'
        },
        {
            color: {backgroundColor: "#272425"},
            value: 'Black'
        },
        {
            color: {backgroundColor: "#6389CB"},
            value: 'Blue'
        },
        {
            color: {backgroundColor: "#F2C758"},
            value: 'Yellow'
        },
        {
            color: {backgroundColor: "#FFFFFF"},
            value: 'White'
        },
    ]


    return (
        <div className="color card__color">
            {color.map(function(item, index){
                return (
                    <label className="color__wrapper" htmlFor={'color' + (index + 1)}>
                        <input onChange={(e) => setValueColor(e.target.value)} value={item.value} className="color__radio" type="radio" name="color" id={'color' + (index + 1)} />
                        <div style={item.color} className="color__decorator"></div>
                    </label>
                )
            })}
        </div>
    )
}