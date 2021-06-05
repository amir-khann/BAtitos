import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <h1>Batitos</h1>
      </div>
      <ul className="nav__right">
        <li className="nav__item">
          <a href="" className="nav__links">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__links">
            Featurs
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__links">
            Contact us
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__links">
            <FaShoppingCart color="#f54e62" size="1.5em" />
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__links">
            <Button btnText="Log in" />{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
