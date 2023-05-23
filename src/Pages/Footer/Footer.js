import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container10">
          <div class="footer-top">
            <div class="footer-section">
              <h3>About Us</h3>
              <p>মশার বংশ করে দেব ধ্বংস এই আমাদের অঙ্গীকার.</p>
            </div>
            <div class="footer-section">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <Link href="#">HOME</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">ABOUT</Link>
                </li>
                <li>
                  <Link href="#">CONTACT</Link>
                </li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>Contact Us</h3>
              <p>Email: info@moshamari.com</p>
              <p>Phone: 01799700293</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2023 MOSHAMARI.COM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
