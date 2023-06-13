import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

const Instructors = () => {
  return (
    <div>
      <Header />
      <Banner
        title="Instructors"
        link="/"
        firstLink="Home"
        currentLink="Instructors"
      />
      {/* Teachers */}
      <div className="teachers" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="teachers_title text-center">
                Meet Our Instructors
              </div>
            </div>
          </div>
          <div className="row teachers_row">
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_1.jpg"
                    alt="https://unsplash.com/@nickkarvounis"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <Link
                      to="/instructor"
                      onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                      }
                    >
                      Jonathan Smith
                    </Link>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_2.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Michelle Williams</a>
                  </div>
                  <div className="teacher_subtitle">Art &amp; Design</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_3.jpg"
                    alt="https://unsplash.com/@taylor_grote"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_4.jpg"
                    alt="https://unsplash.com/@benjaminrobyn"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Christinne Smith</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_5.jpg"
                    alt="https://unsplash.com/@christinhumephoto"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Michelle Williams</a>
                  </div>
                  <div className="teacher_subtitle">Art &amp; Design</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
            {/* Teacher */}
            <div className="col-lg-4 col-md-6">
              <div className="teacher">
                <div className="teacher_image">
                  <img
                    src="images/teacher_6.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
                <div className="teacher_body text-center">
                  <div className="teacher_title">
                    <a href="#">Jack Gallagan</a>
                  </div>
                  <div className="teacher_subtitle">Marketing</div>
                  <div className="teacher_social">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Instructors;
