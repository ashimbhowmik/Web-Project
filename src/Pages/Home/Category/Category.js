import React from "react";
import "../Category/Category.css";
import img1 from "../../../assets/images/img3.jpg";
import img2 from "../../../assets/images/banner/mortein-mosquito-repellent-insta-vaporizer-machine-refill-1-pcs.jpg";
import img3 from "../../../assets/images/kkks.jpg";
import img4 from "../../../assets/images/jdd.jpg";

const Category = () => {
  return (
    <div className="cat1">
      <section className="cat">
        <h1 className="h22">Most Popular Product</h1>
        <div className="flex-2">
          <div className="pro">
            <img className="cat-img" src={img1} alt="" />
            <p className="pp">Oil</p>
          </div>
          <div className="pro">
            <img className="cat-img" src={img2} alt="" />
            <p>Mortein Good Night</p>
          </div>
          <div className="pro">
            <img className="cat-img" src={img3} alt="" />
            <p>Spray</p>
          </div>
          <div className="pro">
            <img className="cat-img" src={img4} alt="" />
            <p>Cream</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
