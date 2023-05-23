import React from "react";
import "../ProductCard/ProductCard.css";

const ProductCard = ({ productt }) => {
  const { img, name, price } = productt;
  console.log(name);
  return (
    <div className="cont1282">
      <section className="cont3223">
        <h1 className="h1-tag">
          <span className="sp">Buy</span> <br /> Now
        </h1>
        <div className="img-div3">
          <img className="mg22" src={img} alt="" />
        </div>
        <div>
          <p className="pps">{name}</p>
          <p className="ppd">BDT : {price}</p>
        </div>
        <div className="btn-div34">
          <button className="btn232">ADD TO CART</button>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
