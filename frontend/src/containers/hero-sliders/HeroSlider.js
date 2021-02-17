import React from "react";
import sliderData from "../../data/hero-sliders/hero-slider.json";
import HeroSliderSingle from "../../components/hero-sliders/HeroSliderSingle";

const HeroSliderOne = () => {
  return (
    <div className="dg__slider__area slider--one">
      {sliderData &&
        sliderData.map((single, key) => {
          return <HeroSliderSingle data={single} key={key} />;
        })}
    </div>
  );
};

export default HeroSliderOne;
