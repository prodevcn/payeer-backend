import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import BlogGridTwo from "../containers/blog-grids/BlogGridTwo";
import SoftwareDownloadTwo from "../components/software-downloads/SoftwareDownloadTwo";
import CounterUp from "../containers/counter-ups/CounterUp";
import WorkProcess from "../containers/work-processes/WorkProcess";
import LiveChartTwo from "../components/live-chart/LiveChartTwo";
import HowWorks from "../components/how-works/HowWorks";
import CurrencyCalculationTwo from "../components/currency-calculations/CurrencyCalculationTwo";
import HeroSliderFour from "../containers/hero-sliders/HeroSliderFour";

const HomeFour = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>ROYAL TRANSFERT | Home Four</title>
        <meta
          name="description"
          content="Homepage of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* hero slider */}
        <HeroSliderFour />
        {/* how works */}
        <HowWorks />
        {/* live chart */}
        <LiveChartTwo />
        {/* work process */}
        <WorkProcess />
        {/* counter up */}
        <CounterUp backgroundImage="/images/bg/4.jpg" />
        {/* currency calculation */}
        <CurrencyCalculationTwo />
        {/* software download */}
        <SoftwareDownloadTwo />
        {/* blog grid */}
        <BlogGridTwo />
      </LayoutTwo>
    </Fragment>
  );
};

export default HomeFour;
