import React from "react";
import Contact from "./Contact/Contact";
import ImageSlider from "./ImageSlider/ImageSlider";
import Category from "./Category/Category";

const Home = () => {
  return (
    <div>
      <ImageSlider></ImageSlider>
      <Category></Category>
      <Contact></Contact>
    </div>
  );
};

export default Home;
