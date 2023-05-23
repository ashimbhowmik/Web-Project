import React from "react";
import "../AllReview/AllReview.css";
import mam from "../../../assets/images/mam.jpg";

const AllReview = ({ review }) => {
  const { customer, email, rating, message } = review;
  console.log(customer, email);
  return (
    <div>
      <section className="r1">
        <div>
          <div className="r2">
            <img src={mam} alt="" />
            <div>
              <h1>{customer}</h1>
              <p>{email}</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Review</h3>
          <p>{message}</p>
        </div>
        <div>
          <p>Rating : {rating} star</p>
          <div className="r4">
            <button className="btn456">Edit</button>
            <button className="btn456">Delete</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllReview;
