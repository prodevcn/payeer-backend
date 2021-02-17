import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import AboutContentTwo from "../components/about-contents/AboutContentTwo";
import VideoPopup from "../components/video-popups/VideoPopup";
import CurrencyTicker from "../containers/currency-tickers/CurrencyTicker";
import MarketTable from "../containers/market-tables/MarketTable";
import AboutContentThree from "../components/about-contents/AboutContentThree";

const AboutBitcoin = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>ROYAL TRANSFERT | About Bitcoin</title>
        <meta
          name="description"
          content="About bitcoin page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="About Bitcoin" />
        {/* about content */}
        <AboutContentThree />
        {/* currency ticker */}
        <CurrencyTicker theme="dark" />
        {/* market table */}
        <MarketTable />
        {/* video popup */}
        <VideoPopup />
        {/* about content two */}
        <AboutContentTwo />
      </LayoutTwo>
    </Fragment>
  );
};

export default AboutBitcoin;
