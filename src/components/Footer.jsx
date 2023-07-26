import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-column">
          <p>LICERIA</p>
          <p>2023 All Rights Reserved</p>
          <hr />
        </div>
        <div className="footer-column">
          <p>HELP</p>
          <p>Shipping</p>
          <p>Returns & Exchanges</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-column">
          <p>ABOUT US</p>
          <p>About Liceria</p>
          <p>Sustainability</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div className="footer-column">
          <p>SHOP</p>
          <p>Necklaces</p>
          <p>Rings</p>
          <p>Bracelets</p>
          <p>Rings</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
