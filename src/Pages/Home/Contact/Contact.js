import React from "react";
import { Link } from "react-router-dom";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <div className="cont33">
      <div className="contact_us_6">
        <div className="responsive-container-block container">
          <form className="form-box">
            <div className="container-block form-wrapper">
              <div className="mob-text">
                <p className="text-blk contactus-head">Get in Touch</p>
                <p className="text-blk contactus-subhead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                  diam lectus sapien.
                </p>
              </div>
              <div className="responsive-container-block" id="i2cbk">
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="i10mt-3"
                >
                  <p className="text-blk input-title">FIRST NAME</p>
                  <input
                    className="input"
                    id="ijowk-3"
                    name="FirstName"
                    placeholder="Please enter first name..."
                  />
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="ip1yp"
                >
                  <p className="text-blk input-title">EMAIL</p>
                  <input
                    className="input"
                    id="ipmgh-3"
                    name="Email"
                    placeholder="Please enter email..."
                  />
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="ih9wi"
                >
                  <p className="text-blk input-title">PHONE NUMBER</p>
                  <input
                    className="input"
                    id="imgis-3"
                    name="PhoneNumber"
                    placeholder="Please enter phone number..."
                  />
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="i634i-3"
                >
                  <p className="text-blk input-title">
                    WHAT DO YOU HAVE IN MIND ?
                  </p>
                  <textarea
                    className="textinput"
                    id="i5vyy-3"
                    placeholder="Please enter query..."
                  ></textarea>
                </div>
              </div>
              <button className="submit-btn" id="w-c-s-bgc_p-1-dm-id-2">
                Submit
              </button>
            </div>
          </form>
          <div
            className="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12"
            id="i772w"
          >
            <div className="map-part">
              <p
                className="text-blk map-contactus-head"
                id="w-c-s-fc_p-1-dm-id"
              >
                Reach us at
              </p>
              <br />
              <div className="social-media-links mob">
                <Link
                  className="social-icon-link"
                  href="https://www.facebook.com/toonaticsbd/"
                  id="itixd"
                >
                  <img
                    className="social-icon-link"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                    alt=""
                  />
                </Link>
                <Link
                  className="social-icon-link"
                  href="https://mail.google.com/mail/u/1/?ogbl#inbox"
                  id="izxvt"
                >
                  <img
                    className="social-icon-link"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                    alt=""
                  />
                </Link>
                <Link className="social-icon-link" href="#" id="izldf-2-2">
                  <img
                    className="social-icon-link"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="map-box container-block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
