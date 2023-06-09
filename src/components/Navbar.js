import React from "react";
import { Link } from "react-router-dom";
import BurgerLogo from "../assets/burgerlogo.png";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <Link to="/">
          <img src={BurgerLogo} />
        </Link>
        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menü</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
};
