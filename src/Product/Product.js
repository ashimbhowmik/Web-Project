import React, { useState } from "react";
import "../Product/Product.css";
import img1 from "../assets/images/img3.jpg";
import img2 from "../assets/images/download (1).jpg";
import img3 from "../assets/images/download.jpg";
import img4 from "../assets/images/kkks.jpg";
import img5 from "../assets/images/shd.jpg";
import img7 from "../assets/images/ohd.jpg";
import img8 from "../assets/images/jdd.jpg";
import img9 from "../assets/images/mosoffmain.webp";

const Product = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <section>
        <div className="div-cc">
          <h1 className="heee">Product Add :{count}</h1>
        </div>
        <div className="fl2">
          <section className="cont3223">
            <h1 className="h1-tag">
              <span className="sp">Buy</span> <br /> Now
            </h1>
            <div className="img-div3">
              <img className="mg22" src={img1} alt="" />
            </div>
            <div>
              <p className="pps">sjdd</p>
              <p className="ppd">BDT : 8744</p>
            </div>
            <div className="btn-div34">
              <button className="btn232" onClick={increment}>
                ADD TO CART
              </button>
            </div>
          </section>
          <section className="cont3223">
            <h1 className="h1-tag">
              <span className="sp">Buy</span> <br /> Now
            </h1>
            <div className="img-div3">
              <img className="mg22" src={img2} alt="" />
            </div>
            <div>
              <p className="pps">sjdd</p>
              <p className="ppd">BDT : 8744</p>
            </div>
            <div className="btn-div34">
              <button className="btn232" onClick={increment}>
                ADD TO CART
              </button>
            </div>
          </section>
          <section className="cont3223">
            <h1 className="h1-tag">
              <span className="sp">Buy</span> <br /> Now
            </h1>
            <div className="img-div3">
              <img className="mg22" src={img3} alt="" />
            </div>
            <div>
              <p className="pps">sjdd</p>
              <p className="ppd">BDT : 8744</p>
            </div>
            <div className="btn-div34">
              <button className="btn232" onClick={increment}>
                ADD TO CART
              </button>
            </div>
          </section>
          <section className="cont3223">
            <h1 className="h1-tag">
              <span className="sp">Buy</span> <br /> Now
            </h1>
            <div className="img-div3">
              <img className="mg22" src={img4} alt="" />
            </div>
            <div>
              <p className="pps">sjdd</p>
              <p className="ppd">BDT : 8744</p>
            </div>
            <div className="btn-div34">
              <button className="btn232" onClick={increment}>
                ADD TO CART
              </button>
            </div>
          </section>
          <section className="cont3223">
            <h1 className="h1-tag">
              <span className="sp">Buy</span> <br /> Now
            </h1>
            <div className="img-div3">
              <img className="mg22" src={img5} alt="" />
            </div>
            <div>
              <p className="pps">sjdd</p>
              <p className="ppd">BDT : 8744</p>
            </div>
            <div className="btn-div34">
              <button className="btn232" onClick={increment}>
                ADD TO CART
              </button>
            </div>
          </section>
          <section className="cont3223">
            <h1 className="h1-tag">
              <span className="sp">Buy</span> <br /> Now
            </h1>
            <div className="img-div3">
              <img className="mg22" src={img5} alt="" />
            </div>
            <div>
              <p className="pps">sjdd</p>
              <p className="ppd">BDT : 8744</p>
            </div>
            <div className="btn-div34">
              <button className="btn232" onClick={increment}>
                ADD TO CART
              </button>
            </div>
          </section>
          <section className="cont3223">
            <h1 className="h1-tag">
              <span className="sp">Buy</span> <br /> Now
            </h1>
            <div className="img-div3">
              <img className="mg22" src={img7} alt="" />
            </div>
            <div>
              <p className="pps">sjdd</p>
              <p className="ppd">BDT : 8744</p>
            </div>
            <div className="btn-div34">
              <button className="btn232" onClick={increment}>
                ADD TO CART
              </button>
            </div>
          </section>
          <section className="cont3223">
            <h1 className="h1-tag">
              <span className="sp">Buy</span> <br /> Now
            </h1>
            <div className="img-div3">
              <img className="mg22" src={img8} alt="" />
            </div>
            <div>
              <p className="pps">sjdd</p>
              <p className="ppd">BDT : 8744</p>
            </div>
            <div className="btn-div34">
              <button className="btn232" onClick={increment}>
                ADD TO CART
              </button>
            </div>
          </section>
          <section className="cont3223">
            <h1 className="h1-tag">
              <span className="sp">Buy</span> <br /> Now
            </h1>
            <div className="img-div3">
              <img className="mg22" src={img9} alt="" />
            </div>
            <div>
              <p className="pps">sjdd</p>
              <p className="ppd">BDT : 8744</p>
            </div>
            <div className="btn-div34">
              <button className="btn232" onClick={increment}>
                ADD TO CART
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Product;
