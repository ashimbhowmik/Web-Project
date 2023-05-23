import React from "react";
import "../ImageSlider/ImageSlider.css";
import img1 from "../../../assets/images/banner/gh-040122-best-mosquito-repellant-1648834942.png";

import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = () => {
  const sliderImages = [
    {
      url: img1,
    },
  ];
  return (
    <div className="slider-img">
      <SimpleImageSlider
        width={1320}
        height={320}
        images={sliderImages}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default ImageSlider;
