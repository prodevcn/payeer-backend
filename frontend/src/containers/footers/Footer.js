import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaVimeoSquare,
  FaTumblrSquare
} from "react-icons/fa";
import { MdExpandLess } from "react-icons/md";

const Footer = ({ theme }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer
      className={`footer-area ${theme === "white" ? "footer--1" : "footer--1"}`}
    >
      <div
        className={`dg__footer__container ${
          theme === "white" ? "bg__color--4" : "bg__color--2"
        }`}
      >
      {/* <img src={process.env.PUBLIC_URL + "/images/wave/wave2.svg"} className="footer-bt-waves footer-bg-waves--item2 js-wave2"></img> */}
        <div className="container">
          <div className="row">
            {/* Start Single Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-12">
              <div className="footer__widget">
                <h4>Resources</h4>
                <div className="footer__inner">
                  <ul className="ft__menu">
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Bitcoin Price</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Blog</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Helps Portal</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Privacy Policy</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Buy Theme</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 xs__mt--40">
              <div className="footer__widget information">
                <h4>Information</h4>
                <div className="footer__inner">
                  <ul className="ft__menu">
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>
                        Currency Exchange
                      </a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Todays Rate</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>About Howar1d</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Privacy Policy</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>How To Video</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 md__mt--40 sm__mt--40">
              <div className="footer__widget support">
                <h4>Support</h4>
                <div className="footer__inner">
                  <ul className="ft__menu">
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Contact us</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Support Center</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Helps</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Live Chat</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 md__mt--40 sm__mt--40">
              <div className="footer__widget resources">
                <h4>Contact</h4>
                <div className="footer__inner">
                  <ul>
                    <li>howar1d@example.info</li>
                    <li>
                      Address:
                      <br /> your address here
                    </li>
                    <li>
                      Phone:
                      <br /> +11 1111 111 111
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
          </div>
        </div>
      </div>
      <div
        className={`copyright ${
          theme === "white" ? "bg__color--1" : "bg--black"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="copyright__inner">
                <p>Copyright © All Right Reserved</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
              <ul className="footer__right social__icon">
                <li>
                  <a
                    href="//facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="//linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="//twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitterSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="//vimeo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaVimeoSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="//tumblr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTumblrSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <MdExpandLess />
      </button>
    </footer>
  );
};

export default Footer;
