import React from "react";
import "../ImageSlider/ImageSlider.css";
import img1 from "../../../assets/images/banner/Engagment.jpg";

import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = () => {
  const sliderImages = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4CYIMkdKyc7Y7_8YqgKpN8TZR4EIO5U7urL2v-uwXBNClpGSavhf4FtD5_N6SP3tfLM&usqp=CAU",
    },
    {
      url: img1,
    },
    {
      url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTnzApyh1ZmbXLBUg_iFRio23hzRyAJfwBRfnVozXdEnu-NK4jFt2_gsYujKf-CbT6Cr_A&usqp=CAU",
    },
    {
      url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTDnfOIY9gjVyoT4ulMp55roiV5KefqaDByUc0HdD8p3tdpXuwxTaXjhLdyUFeQzZ2ZwE&usqp=CAU",
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
