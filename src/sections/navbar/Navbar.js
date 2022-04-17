import React from "react";
import "./Navbar.css";
// logo is imported here ..............!
import Logo from "../../assets/icons/logo.svg";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-content">
        {" "}
        <img src={Logo} alt="logo of the tamplate"  />
        <ul className="nav-items keep-me-center">
          <li className="nav-item">Location</li>
          <li className="nav-item">Blogs</li>
          <li className="nav-item">Testimonials</li>
          <li className="nav-item">Contact </li>
        </ul>
      </div>
    </div>
  );
}
