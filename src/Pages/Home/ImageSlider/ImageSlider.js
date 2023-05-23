import React from "react";
import "../ImageSlider/ImageSlider.css";
import img1 from "../../../assets/images/banner/gh-040122-best-mosquito-repellant-1648834942.png";
import img3 from "../../../assets/images/banner/mos.jpg";

import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = () => {
  const sliderImages = [
    {
      url: img1,
    },
    {
      url: img3,
    },
  ];
  return (
    <div className="slider-img">
      <SimpleImageSlider
        width={1320}
        height={600}
        images={sliderImages}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default ImageSlider;
