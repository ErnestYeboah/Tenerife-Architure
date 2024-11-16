import React, { useState } from "react";
import { navLinksData } from "../../data-exports/navData";
import NavLinks from "./NavLinks";
import "./navStyles.css";

type CallerProps = {
  phone: string;
  children: React.ReactNode;
};
const Callto = ({ phone, children }: CallerProps) => {
  return (
    <a className="phone" href={`tel:${phone}`}>
      {children}
    </a>
  );
};

export default function Nav() {
  const [navData] = useState(navLinksData);
  const [linkClicked, setLinkClicked] = useState(0);

  function handleLinkClicked(currentIndex: number) {
    setLinkClicked(currentIndex);
  }

  return (
    <nav className="nav">
      <h3 style={{ fontSize: "2rem" }}>Tenerife</h3>
      <ul className="navigation__links">
        {navLinksData &&
          navData.map((link, index) => (
            <NavLinks
              className={index === linkClicked ? "label active" : ""}
              onClick={() => handleLinkClicked(index)}
              key={index}
              navData={link}
            />
          ))}
      </ul>
      <Callto phone="0203631431">0203631431</Callto>
    </nav>
  );
}
