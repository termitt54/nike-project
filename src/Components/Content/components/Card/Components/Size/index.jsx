import React from "react";
import "./index.scss";

export const Size = ({sizeValue}) => {
    const size = [
        {
            title: '8',
            value: '8'
        },
        {
            title: '8.5',
            value: '8.5'
        },
        {
            title: '9',
            value: '9'
        },
        {
            title: '9.5',
            value: '9.5'
        },
        {
            title: '10',
            value: '10'
        },
        {
            title: '10.5',
            value: '10.5'
        },
        {
            title: '11',
            value: '11'
        },
        {
            title: '11.5',
            value: '11.5'
        },
        {
            title: '12',
            value: '12'
        },
        {
            title: '12.5',
            value: '12.5'
        }

    ]
    return (
        <div className="size card__size">
            {size.map(function(item, index){
                return (
                    <label className="size__wrapper" htmlFor={'size' + (index + 1)}>
                        <input onChange={(e) => sizeValue(e.target.value)} value={item.value} className="size__radio" type="radio" name="size" id={'size' + (index + 1)} />
                        <div className="size__decorator">{item.title}</div>
                    </label>
                )
            })}
        </div>
    )
}