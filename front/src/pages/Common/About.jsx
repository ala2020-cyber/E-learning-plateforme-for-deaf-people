import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

const About = () => {
  return (
    <div>
      <div className="super_container">
        {/* Header */}
        <Header />
        {/* Menu */}

        <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
          <div className="menu_close_container">
            <div className="menu_close">
              <div />
              <div />
            </div>
          </div>
          <div className="search">
            <form action="#" className="header_search_form menu_mm">
              <input
                type="search"
                className="search_input menu_mm"
                placeholder="Search"
                required="required"
              />
              <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                <i className="fa fa-search menu_mm" aria-hidden="true" />
              </button>
            </form>
          </div>
          <nav className="menu_nav">
            <ul className="menu_mm">
              <li className="menu_mm">
                <a href="index.html">Home</a>
              </li>
              <li className="menu_mm">
                <a href="courses.html">Courses</a>
              </li>
              <li className="menu_mm">
                <a href="instructors.html">Instructors</a>
              </li>
              <li className="menu_mm">
                <a href="#">Events</a>
              </li>
              <li className="menu_mm">
                <a href="blog.html">Blog</a>
              </li>
              <li className="menu_mm">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="menu_extra">
            <div className="menu_phone">
              <span className="menu_title">phone:</span>(009) 35475 6688933 32
            </div>
            <div className="menu_social">
              <span className="menu_title">follow us</span>
              <ul>
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
                    <i className="fa fa-instagram" aria-hidden="true" />
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
        {/* Home */}
        <Banner title="About" link="/" firstLink="Home" currentLink="about" />

        {/* <div className="home"> */}
        {/* Background image artist https://unsplash.com/@thepootphotographer */}
        {/* <div className="home_background parallax_background parallax-window" data-parallax="scroll" data-image-src="images/about.jpg" data-speed="0.8" />
      <div className="home_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="home_content text-center">
                <div className="home_title">About us</div>
                <div className="breadcrumbs">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li>About us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
        {/* About */}
        <div className="about" style={{ marginTop: "90px" }}>
          <div className="container">
            <div className="row about_row row-lg-eq-height">
              <div className="col-lg-6">
                <div className="about_content">
                  <div className="about_title">Our Platform's main goal</div>
                  <div className="about_text">
                    <p>
                      Suspendisse tincidunt magna eget massa hendrerit
                      efficitur. Ut euismod pellentesque imperdiet. Cras laoreet
                      gravida lectus, at viverra lorem venenatis in. Aenean id
                      varius quam. Nullam bibendum interdum dui, ac tempor lorem
                      convallis ut. Maecenas rutrum viverra sapien sed
                      fermentum. Morbi tempor odio eget lacus tempus pulvinar.
                      Praesent vel nisl fermentum, gravida augue. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Integer id
                      convallis libero, sed blandit nibh. Nam ultricies
                      tristique nibh, consequat ornare nibh. Quisque vitae odio
                      ligula.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about_image">
                  <img
                    src="images/about_1.jpg"
                    alt="https://unsplash.com/@jtylernix"
                  />
                </div>
              </div>
            </div>
            <div className="row about_row row-lg-eq-height">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="about_image">
                  <img src="images/about_1.jpg" alt />
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div className="about_content">
                  <div className="about_title">eLearn's Vision</div>
                  <div className="about_text">
                    <p>
                      Suspendisse tincidunt magna eget massa hendrerit
                      efficitur. Ut euismod pellentesque imperdiet. Cras laoreet
                      gravida lectus, at viverra lorem venenatis in. Aenean id
                      varius quam. Nullam bibendum interdum dui, ac tempor lorem
                      convallis ut. Maecenas rutrum viverra sapien sed
                      fermentum. Morbi tempor odio eget lacus tempus pulvinar.
                      Praesent vel nisl fermentum, gravida augue. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Integer id
                      convallis libero, sed blandit nibh. Nam ultricies
                      tristique nibh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Milestones */}
        {/* <div className="milestones"> */}
        {/* Background image artis https://unsplash.com/@thepootphotographer */}
        {/* <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/milestones.jpg" data-speed="0.8" /> */}
        {/* <div className="container"> */}
        {/* <div className="row milestones_container"> */}
        {/* Milestone */}
        {/* <div className="col-lg-3 milestone_col">
            <div className="milestone text-center">
              <div className="milestone_icon"><img src="images/milestone_1.svg" alt /></div>
              <div className="milestone_counter" data-end-value={1548}>0</div>
              <div className="milestone_text">Online Courses</div>
            </div>
          </div> */}
        {/* Milestone */}
        {/* <div className="col-lg-3 milestone_col">
            <div className="milestone text-center">
              <div className="milestone_icon"><img src="images/milestone_2.svg" alt /></div>
              <div className="milestone_counter" data-end-value={7286}>0</div>
              <div className="milestone_text">Students</div>
            </div>
          </div> */}
        {/* Milestone */}
        {/* <div className="col-lg-3 milestone_col">
            <div className="milestone text-center">
              <div className="milestone_icon"><img src="images/milestone_3.svg" alt /></div>
              <div className="milestone_counter" data-end-value={257}>0</div>
              <div className="milestone_text">Teachers</div>
            </div>
          </div> */}
        {/* Milestone */}
        {/* <div className="col-lg-3 milestone_col">
            <div className="milestone text-center">
              <div className="milestone_icon"><img src="images/milestone_4.svg" alt /></div>
              <div className="milestone_counter" data-end-value={39}>0</div>
              <div className="milestone_text">Countries</div>
            </div>
          </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}

        <div className="row">
          <div className="col text-center">
            <div className="button teachers_button">
              <Link
                to="/instructors"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                see all teachers
                <div className="button_arrow">
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Teachers */}
        <div className="teachers">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="teachers_title text-center">
                  Meet the Teachers
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
                      <Link to="/instructor/:id">Jonathan Smith</Link>
                    </div>
                    <div className="teacher_subtitle">Marketing</div>
                    <div className="teacher_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
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
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
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
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
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
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
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
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
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
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
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
            <div className="row">
              <div className="col text-center">
                <div className="button teachers_button">
                  <Link
                    to="/instructors"
                    onClick={() =>
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                    }
                  >
                    see all teachers
                    <div className="button_arrow">
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default About;
