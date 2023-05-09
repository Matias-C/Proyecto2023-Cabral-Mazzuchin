import "./Nav.css"
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">INICIO</a>
        </li>
        <li>
          <a href="gallery">GALERIA</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
