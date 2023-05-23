import React from "react";
import { toast } from "react-hot-toast";
import "../Review/Review.css";
import { useLoaderData } from "react-router-dom";
import AllReview from "./AllReview/AllReview";

const Review = () => {
  const allReviews = useLoaderData();
  console.log(allReviews);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const customerName = form.customerName.value;
    const email = form.email.value;
    const rating = form.rating.value;
    const message = form.message.value;

    const review = {
      customer: customerName,
      email,
      rating,
      message,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();

        if (data.acknowledged) {
          toast.success("Review Successfully", {
            theme: "colored",
          });

          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div className="cont12">
      <section className="cont13">
        <i>
          <h1 className="header">Submit Your Review</h1>
        </i>
        <section className="w1">
          <form onSubmit={handleReview}>
            <div className="w2">
              <input
                name="customerName"
                type="text"
                placeholder="Name"
                required
                defaultValue="Polin Mam"
                className=""
              />
              <input
                name="email"
                type="text"
                placeholder="Your email"
                required
                defaultValue="polinmam12@gmail.com"
                className=""
              />
            </div>
            <div className="w22">
              <input
                name="rating"
                type="number"
                placeholder="Rating"
                required
                className=""
              />
              <br />
              <textarea
                name="message"
                className=""
                placeholder="Your Opinion"
                required
              ></textarea>
            </div>

            <input className="btn45" type="submit" value="Submit" />
          </form>
        </section>
      </section>
      <section className="hed">
        <h1>All review here</h1>
        <div className="fl">
          {allReviews.map((reviewe) => (
            <AllReview key={reviewe._id} review={reviewe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Review;
