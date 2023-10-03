import React from "react";

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>PRODUCTS</h4>
          <ul>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Webinars</a>
            </li>
            <li>
              <a href="#">Membership</a>
            </li>
            <li>
              <a href="#">Digital Products</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>RESOURCES</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Updates</a>
            </li>
            <li>
              <a href="#">Product Roadmap</a>
            </li>
            <li>
              <a href="#">Partner Program</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>LEGAL</h4>
          <ul>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">User guidelines</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>REACH US</h4>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <div>
            <p>© 2023 by Technorate Animations</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
   
  );
}

export default Footer;
