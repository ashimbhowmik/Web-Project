import React from "react";
import "../Product/Product.css";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";

const Product = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <section>
        <div className="fl2">
          {products.map((productt) => (
            <ProductCard key={productt._id} productt={productt} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
