import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">Trippy</h1>

      <div className="menu-icons" onClick={handleClick}>
        {clicked ? (
          <MdClose className="menu-icon" />
        ) : (
          <BiMenu className="menu-icon" />
        )}
      </div>

      <ul className={`nav-menu ${clicked ? "active" : ""}`}>
        {MenuItems.map((item, i) => {
          return (
            <li key={i} className={item.cName}>
              {item.icon}
              <Link to={item.url} className="nav-link" onClick={handleClick}>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}
