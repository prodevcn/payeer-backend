import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navigation = () => {
  return (
    <nav className="mainmenu__nav">
      <ul className="mainmenu">
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "/"}>
            Home {/*<IoIosArrowDown />*/}
          </Link>
          {/* <ul className="">
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-one"}>Home One</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-two"}>Home Two</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-three"}>
                Home Three
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-four"}>Home Four</Link>
            </li>
          </ul> */}
        </li>
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "/service"}>
            Service <IoIosArrowDown />
          </Link>
          <ul className="dropdown">
            <li>
              <Link to={process.env.PUBLIC_URL + "/service"}>Service Page</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/service-details"}>
                Service Details
              </Link>
            </li>
          </ul>
        </li>
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "/blog"}>
            News <IoIosArrowDown />
          </Link>
          <ul className="dropdown">
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog Page</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-right-sidebar"}>
                Blog Right Sidebar
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                Blog Details
              </Link>
            </li>
          </ul>
        </li>
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "#/"}>
            Pages <IoIosArrowDown />
          </Link>
          <ul className="dropdown">
            <li>
              <Link to={process.env.PUBLIC_URL + "/about"}>About Us</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/about-bitcoin"}>
                About Bitcoin
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/merchants"}>Merchants</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/team"}>Team Page</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/wallet"}>Wallet Page</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                Login / Register
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
