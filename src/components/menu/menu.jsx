import React from "react";
import { Link } from "react-router-dom";

import Logo from "../logo/logo";
import NavigationBar from "../navigation-bar/navigation-bar";

function Menu() {
  return (
    <nav className="menu">
      <div className="menu__container">
        <Link to="/home" aria-label="На главную">
          <Logo />
        </Link>
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/" className="menu__link">
              Каталог
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/contacts" className="menu__link">
              Где купить?
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/about" className="menu__link">
              О компании
            </Link>
          </li>
        </ul>
        <NavigationBar />
      </div>

    </nav>

  );
}

export default Menu;
