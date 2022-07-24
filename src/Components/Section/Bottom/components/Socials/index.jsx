import React from "react";
import inst from "../../../../assests/icon/inst.svg"
import twit from "../../../../assests/icon/twit.svg"
import fsb from "../../../../assests/icon/fsb.svg"

import "./index.scss";

const Socials = () => {

    const socialsLink = [
        {
            href: '#',
            img: inst
        },
        {
            href: '#',
            img: twit
        },
        {
            href: '#',
            img: fsb
        }
    ]

    return (
        <div className="socials">
           {socialsLink.map(function(item){
            return (
                <a className="socials__link" href={item.href}><img src={item.img} alt="" /></a>
            )
           })} 
        </div>
    )
}

export default Socials;