import React from "react";
import "./index.scss";
import twitter from "../../../../../../assets/icon/twit.svg";
import instagram from "../../../../../../assets/icon/inst.svg";
import facebook from "../../../../../../assets/icon/fsb.svg";

export const Socials = () => {
  const socialLink = [
    {
      icon: <img className="social__icon" src={instagram} alt="" />,
      href: "#",
    },
    {
      icon: <img className="social__icon" src={twitter} alt="" />,
      href: "#",
    },
    {
      icon: <img className="social__icon" src={facebook} alt="" />,
      href: "#",
    },
  ];
  return (
    <div className="socials content__socials">
      {socialLink.map(function (link) {
        return (
          <a className="socials__link" href={link.href}>
            {link.icon}
          </a>
        );
      })}
    </div>
  );
};
