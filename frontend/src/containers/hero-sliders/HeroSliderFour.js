import React from "react";
import sliderData from "../../data/hero-sliders/hero-slider-four.json";
import HeroSliderFourSingle from "../../components/hero-sliders/HeroSliderFourSingle";

const HeroSliderFour = () => {
  return (
    <div className="dg__slider__area slider--2">
      {sliderData &&
        sliderData.map((single, key) => {
          return <HeroSliderFourSingle data={single} key={key} />;
        })}
    </div>
  );
};

export default HeroSliderFour;
