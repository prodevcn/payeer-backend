import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import HeroSlider from "../containers/hero-sliders/HeroSlider";
import CurrencyTicker from "../containers/currency-tickers/CurrencyTicker";
import EasyStart from "../containers/easy-starts/EasyStart";
import LiveChart from "../components/live-chart/LiveChart";
import SecureTransaction from "../components/secure-transactions/SecureTransaction";
import SoftwareDownload from "../components/software-downloads/SoftwareDownload";
import BlogGrid from "../components/blog-grids/BlogGrid";
import CounterUp from "../containers/counter-ups/CounterUp";
import CurrencyCalculation from "../components/currency-calculations/CurrencyCalculation";

const HomeOne = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>ROYAL TRANSFERT | Home One</title>
        <meta
          name="description"
          content="Homepage of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutOne>
        {/* hero slider */}
        <HeroSlider />
        {/* currency ticker */}
        <CurrencyTicker />
        {/* easy start */}
        <EasyStart />
        {/* currency calculation */}
        <CurrencyCalculation />
        {/* counter up */}
        <CounterUp backgroundImage="/images/bg/2.jpg" />
        {/* secure transaction */}
        <SecureTransaction />
        {/* live chart */}
        <LiveChart />
        {/* software download */}
        <SoftwareDownload />
        {/* blog grid */}
        <BlogGrid />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeOne;
