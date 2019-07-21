import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="footer-left-section">
            <div className="logo-component">
              <a href=""><img
                className="logo"
                src="https://www.washywash.com/image/cache/static/logo-824x159.png"
                alt="WashyWash"
                title="WashyWash"
              /></a>
              <p className="slogan">We wash everything!</p>
            </div>
          </div>
          <div className="footer-middle-section">
            <div className="ul-section">
              <ul className="left-ul">
                <li>
                  <a href=""> Services</a>
                </li>
                <br />
                <li>
                  <a href="">About Us</a>{" "}
                </li>
              </ul>
              <ul className="right-ul">
                <li>
                  <a href=""> Contact Us</a>
                </li>
                <br />
                <li>
                  <a href=""> Locate Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-right-section">
            <div className="follow-us">
              <div>
                <h2>Follow Us</h2>
              </div><br/>
              <div className="social-media">
                <a href="">
                  <i class="fab fa-facebook-square" />
                </a>
                <a href="">
                  <i class="fab fa-instagram" />
                </a>
                <a href="">
                  <i class="fab fa-twitter" />
                </a>
              </div>
            </div>
            <h5>©WashyWash 2019</h5>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
