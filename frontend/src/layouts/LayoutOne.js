import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "../containers/headers/Header";
import Footer from "../containers/footers/Footer";
import BrandLogo from "../containers/brand-logos/BrandLogo";
import Newsletter from "../components/newsletters/Newsletter";

const LayoutOne = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      {/* brand logo */}
      <BrandLogo />
      {/* newsletter */}
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

LayoutOne.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string
};

export default LayoutOne;
