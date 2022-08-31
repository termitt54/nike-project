import React from "react";
import "./index.scss";

export const Navigation = () => {
  const navLink = [
    {
      title: "New Releases",
      href: "#",
    },
    {
      title: "MEN",
      href: "#",
    },
    {
      title: "WoMEN",
      href: "#",
    },
    {
      title: "KIDS",
      href: "#",
    },
    {
      title: "CUSTOMIZE",
      href: "#",
    },
  ];

  return (
    <nav className="nav header__nav">
      {navLink.map(function (link) {
        return (
          <a href={link.href} className="nav__link">
            {link.title}
          </a>
        );
      })}
    </nav>
  );
};
