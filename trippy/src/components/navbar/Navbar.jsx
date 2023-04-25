import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";

export default function Navbar() {
  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">Trippy</h1>
      <ul>
        {MenuItems.map((item, i) => {
          return (
            <li key={i}>
              {item.icon}
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
