import React from "react";
import "../Category/Category.css";
import img1 from "../../../assets/images/banner/Engagment.jpg";

const Category = () => {
  return (
    <div className="cat1">
      <section className="cat">
        <h1 className="h22">Most Popular Product</h1>
        <div className="flex-2">
          <div className="pro">
            <img className="cat-img" src={img1} alt="" />
            <p className="pp">Product Name</p>
          </div>
          <div className="pro">
            <img className="cat-img" src={img1} alt="" />
            <p>Product Name</p>
          </div>
          <div className="pro">
            <img className="cat-img" src={img1} alt="" />
            <p>Product Name</p>
          </div>
          <div className="pro">
            <img className="cat-img" src={img1} alt="" />
            <p>Product Name</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
