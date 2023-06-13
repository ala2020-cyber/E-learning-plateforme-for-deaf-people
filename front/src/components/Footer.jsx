import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* About */}
            <div className="col-lg-3 footer_col">
              <div className="footer_about">
                <div className="logo_container">
                  <a href="#">
                    <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                      <div className="logo_img">
                        {" "}
                        <img src="/images/logo.png" width="130px" alt />
                      </div>
                      {/* <div className="logo_text">learn</div> */}
                    </div>
                  </a>
                </div>
                <div className="footer_about_text">
                  <p>
                    Maecenas rutrum viverra sapien sed fermentum. Morbi tempor
                    odio eget lacus tempus pulvinar.
                  </p>
                </div>
                <div className="footer_social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="copyright">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 footer_col">
              <div className="footer_links">
                <div className="footer_title">Quick menu</div>
                <ul className="footer_list">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="#">Facts</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 footer_col">
              <div className="footer_links">
                <div className="footer_title">Useful Links</div>
                <ul className="footer_list">
                  <li>
                    <a href="courses.html">Courses</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="news.html">News</a>
                  </li>
                  <li>
                    <a href="#">Teachers</a>
                  </li>
                  <li>
                    <a href="#">Links</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 footer_col">
              <div className="footer_contact">
                <div className="footer_title">Contact Us</div>
                <div className="footer_contact_info">
                  <div className="footer_contact_item">
                    <div className="footer_contact_title">Address:</div>
                    <div className="footer_contact_line">
                      1481 Creekside Lane Avila Beach, CA 93424
                    </div>
                  </div>
                  <div className="footer_contact_item">
                    <div className="footer_contact_title">Phone:</div>
                    <div className="footer_contact_line">
                      +53 345 7953 32453
                    </div>
                  </div>
                  <div className="footer_contact_item">
                    <div className="footer_contact_title">Email:</div>
                    <div className="footer_contact_line">
                      yourmail@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
