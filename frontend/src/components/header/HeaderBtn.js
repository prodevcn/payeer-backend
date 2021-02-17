import React from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
const HeaderBtn = () => {
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };
  return (
    <div className="header-btn-wrapper">
      <ul className="accounts d-none d-lg-flex">
        <li>
          <Link to={process.env.PUBLIC_URL + "/login-register"}><FaKey /> &nbsp; Log in</Link>
        </li>
        <li className="active">
          <Link to={process.env.PUBLIC_URL + "/login-register"}><FaWallet /> &nbsp;Create Account</Link>
        </li>
      </ul>
      <div className="mobile-button-wrapper d-block d-lg-none text-right">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <IoIosMenu />
        </button>
      </div>
    </div>
  );
};

export default HeaderBtn;
