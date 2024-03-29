import React from "react";
import "../components/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer-ul">
      <ul>
        <li className="Active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/active">Active</Link>
        </li>
      </ul>
      <p>Copyright © 2024 Doon-Food | All Rights Reserved |</p>
    </div>
  );
};

export default Footer;
