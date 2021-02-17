import PropTypes from "prop-types";
import React from "react";

const WalletFeatureSingle = ({ data }) => {
  return (
    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
      <div className="feature bg--1">
        <div className="icon">
          <img src={process.env.PUBLIC_URL + data.image} alt="service icon" />
        </div>
        <div className="content">
          <h2>{data.title}</h2>
          <p>{data.content}</p>
        </div>
      </div>
    </div>
  );
};

WalletFeatureSingle.propTypes = {
  data: PropTypes.object
};

export default WalletFeatureSingle;
