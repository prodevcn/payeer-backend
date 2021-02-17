import React from "react";
import sliderData from "../../data/hero-sliders/hero-slider-two.json";
import HeroSliderTwoSingle from "../../components/hero-sliders/HeroSliderTwoSingle.js";

const HeroSliderTwo = () => {
  return (
    <div className="dg__slider__area slider--2">
      {sliderData &&
        sliderData.map((single, key) => {
          return <HeroSliderTwoSingle data={single} key={key} />;
        })}
    </div>
  );
};

export default HeroSliderTwo;
