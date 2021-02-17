import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Particle from "../particles/Particle";

const HeroSliderOneSingle = ({ data }) => {
  return (
    <div
      className="slide d-flex bg-image--1 align__center poss--relative"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + data.backgroundImage})`
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex align-items-center">
            <div className="slide__inner">
              <h1>{data.title}</h1>
              <Link
                className="slide__btn dg__btn btn--white"
                to={process.env.PUBLIC_URL + data.url}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-12">
            <div className="slider__fornt text-right">
              <img
                src={process.env.PUBLIC_URL + data.image}
                alt="slider images"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      {/* particle */}
      <Particle />
    </div>
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.object
};

export default HeroSliderOneSingle;
