import React from "react";
import sliderData from "../../data/hero-sliders/hero-slider-three.json";
import HeroSliderThreeSingle from "../../components/hero-sliders/HeroSliderThreeSingle.js";

const HeroSliderThree = () => {
  return (
    <div className="dg__slider__area slider--3">
      {sliderData &&
        sliderData.map((single, key) => {
          return <HeroSliderThreeSingle data={single} key={key} />;
        })}
    </div>
  );
};

export default HeroSliderThree;
