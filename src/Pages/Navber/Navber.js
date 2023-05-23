import React from "react";
import "../Navber/navber.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import search from "../../assets/icons/search-interface-symbol.png";
import user from "../../assets/icons/user.png";
import shop from "../../assets/icons/shopping-cart.png";

const Navber = () => {
  return (
    <div className="container">
      <header className="content">
        <nav className="flex">
          <div className="nav-1">
            <img src={logo} alt="" />
            <h1>Mosha-Mari</h1>
          </div>
          <div className="nav-2">
            <Link to="/home" className="link">
              Home
            </Link>
            <Link to="/product" className="link">
              Product
            </Link>
            <Link to="/about" className="link">
              About
            </Link>
            <Link to="/faq" className="link">
              Faq
            </Link>
            <Link to="/review" className="link">
              Review
            </Link>
          </div>
          <div className="nav-3">
            <Link to="/">
              <img src={user} alt="" />
            </Link>
            <Link>
              <img src={shop} alt="" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navber;
