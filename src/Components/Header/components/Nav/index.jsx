import React from "react";

import "./index.scss"

const Nav = () => {

    const nav = [
        {
            link: '#',
            text: 'New Releases'
        },
        {
            link: '#',
            text: 'Men'
        },
        {
            link: '#',
            text: 'Women'
        },
        {
            link: '#',
            text: 'Kids'
        },
        {
            link: '#',
            text: 'Customize'
        }
    ]

    return (
        <div className="nav header__nav">
            {nav.map(function(item){
                return (
                    <a className="nav__link" href={item.link}>{item.text}</a>
                )
            })}
        </div>      
    )
}

export default Nav;