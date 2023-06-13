import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const { instructor } = useSelector((state) => state.authInstructor);

  const navigate = useNavigate();

  useEffect(() => {
    if (instructor) {
      navigate("/formateur");
    }
  }, [navigate, instructor]);

  return (
    <div>
      <div className="super_container">
        {/* header */}
        <Header />
        {/* Menu */}
        <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
          <div className="menu_close_container">
            <div className="menu_close">
              <div />
              <div />
            </div>
          </div>
          {/* <div className="search">
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
          </div> */}
          <nav className="menu_nav">
            <ul className="menu_mm">
              <li className="menu_mm">
                <Link to="/">Home</Link>
              </li>
              <li className="menu_mm">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="menu_mm">
                <Link to="/instructors"></Link>
              </li>
              <li className="menu_mm">
                <Link to="/about">About</Link>
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
        <div className="home">
          <div className="home_slider_container">
            {/* Home Slider */}
            <div className="owl-carousel owl-theme home_slider">
              {/* Slider Item */}
              <div className="owl-item">
                {/* Background image artist https://unsplash.com/@benwhitephotography */}
                <div
                  className="home_slider_background"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
                  }}
                />
                <div className="home_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_content text-center">
                          <div className="home_logo">
                            {/* <img src="images/home_logo.png" alt /> */}
                          </div>
                          <div className="home_text">
                            <div className="home_title">Time to LEARN...</div>
                            <div className="home_subtitle">
                              The beautiful thing about learning is that nobody
                              can take it away from you.
                            </div>
                          </div>
                          <div className="home_buttons">
                            {/* <div className="button home_button">
                              <a href="#">
                                learn more
                                <div className="button_arrow">
                                  <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                  />
                                </div>
                              </a>
                            </div> */}
                            <Link to="/courses">
                              <div className="button home_button">
                                <a href="#">
                                  Search for Course
                                  <div className="button_arrow">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                  </div>
                                </a>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slider Item */}
              <div className="owl-item">
                {/* Background image artist https://unsplash.com/@benwhitephotography */}
                <div
                  className="home_slider_background"
                  style={{ backgroundImage: "url(images/index.jpg)" }}
                />
                <div className="home_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_content text-center">
                          <div className="home_logo">
                            <img src="images/home_logo.png" />
                          </div>
                          <div className="home_text">
                            <div className="home_title">
                              Complete Online Courses
                            </div>
                            <div className="home_subtitle">
                              Maecenas rutrum viverra sapien sed fermentum.
                              Morbi tempor odio eget lacus tempus pulvinar.
                              Praesent vel nisl fermentum, gravida augue ut,
                              fermentum ipsum.
                            </div>
                          </div>
                          <div className="home_buttons">
                            <div className="button home_button">
                              <a href="#">
                                learn more
                                <div className="button_arrow">
                                  <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="button home_button">
                              <a href="#">
                                see all courses
                                <div className="button_arrow">
                                  <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slider Item */}
              <div className="owl-item">
                {/* Background image artist https://unsplash.com/@benwhitephotography */}
                <div
                  className="home_slider_background"
                  style={{ backgroundImage: "url(images/index.jpg)" }}
                />
                <div className="home_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_content text-center">
                          <div className="home_logo">
                            <img src="images/home_logo.png" />
                          </div>
                          <div className="home_text">
                            <div className="home_title">
                              Complete Online Courses
                            </div>
                            <div className="home_subtitle">
                              Maecenas rutrum viverra sapien sed fermentum.
                              Morbi tempor odio eget lacus tempus pulvinar.
                              Praesent vel nisl fermentum, gravida augue ut,
                              fermentum ipsum.
                            </div>
                          </div>
                          <div className="home_buttons">
                            <div className="button home_button">
                              <a href="#">
                                learn more
                                <div className="button_arrow">
                                  <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="button home_button">
                              <a href="#">
                                see all courses
                                <div className="button_arrow">
                                  <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Featured Course */}
        {/* <div className="featured">
          <div className="container">
            <div className="row">
              <div className="col"> */}
        {/* Home Slider Nav */}
        {/* <div className="home_slider_nav_container d-flex flex-row align-items-start justify-content-between">
                  <div className="home_slider_nav home_slider_prev trans_200">
                    <i className="fa fa-angle-left" aria-hidden="true" />
                  </div>
                  <div className="home_slider_nav home_slider_next trans_200">
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </div>
                </div>
                <div className="featured_container">
                  <div className="row">
                    <div className="col-lg-6 featured_col">
                      <div className="featured_content">
                        <div className="featured_header d-flex flex-row align-items-center justify-content-start">
                          <div className="featured_tag">
                            <a href="#">Featured</a>
                          </div>
                          <div className="featured_price ml-auto">
                            Price: <span>$35</span>
                          </div>
                        </div>
                        <div className="featured_title">
                          <h3>
                            <a href="courses.html">Online Literature Course</a>
                          </h3>
                        </div>
                        <div className="featured_text">
                          Maecenas rutrum viverra sapien sed fermentum. Morbi
                          tempor odio eget lacus tempus pulvinar. Donec vehicula
                          efficitur nibh, in pretium nulla interdum non.
                        </div>
                        <div className="featured_footer d-flex align-items-center justify-content-start">
                          <div className="featured_author_image">
                            <img src="images/featured_author.jpg" />
                          </div>
                          <div className="featured_author_name">
                            By <a href="#">James S. Morrison</a>
                          </div>
                          <div className="featured_sales ml-auto">
                            <span>352</span> Sales
                          </div>
                        </div>
                        <div className="col text-center">
                          <div className="button teachers_button">
                            <Link to="/instructors">
                              Enroll
                              <div className="button_arrow">
                                <i
                                  className="fa fa-angle-right"
                                  aria-hidden="true"
                                />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 featured_col"> */}
        {/* Background image artist https://unsplash.com/@jtylernix */}
        {/* <div
                        className="featured_background"
                        style={{ backgroundImage: "url(images/featured.jpg)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Courses */}
        <div className="courses">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="section_title text-center">
                  <h2>Choose your course</h2>
                </div>
                <div className="section_subtitle">
                  Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut
                  euismod pellentesque imperdiet. Cras laoreet gravida lectus,
                  at viverra lorem venenatis in. Aenean id varius quam. Nullam
                  bibendum interdum dui, ac tempor lorem convallis ut
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="course_search">
                  <form
                    action="#"
                    className="course_search_form d-flex flex-md-row flex-column align-items-start justify-content-between"
                  >
                    <div>
                      <input
                        type="text"
                        className="course_input"
                        placeholder="Course"
                        required="required"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="course_input"
                        placeholder="Level"
                        required="required"
                      />
                    </div>
                    <button className="course_button">
                      <span>search course</span>
                      <span className="button_arrow">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {/* Courses Slider */}
                <div className="courses_slider_container">
                  <div className="owl-carousel owl-theme courses_slider">
                    {/* Slider Item ffffffffffffffffffffffffffffffff*/}
                    <div className="owl-item">
                      <div className="course">
                        <div className="course_image">
                          <img
                            width="50px"
                            src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn"
                          />
                        </div>
                        <div className="course_body">
                          <div className="course_header d-flex flex-row align-items-center justify-content-start">
                            <div className="course_tag">
                              <a href="#">BEGINNER</a>
                            </div>
                            {/* <div className="course_price ml-auto">
                              Price: <span>$35</span>
                            </div> */}
                          </div>
                          <div className="course_title">
                            <h3>
                              <a href="courses.html">HTML Course</a>
                            </h3>
                          </div>
                          <div className="course_text">
                            learn all about structure of websites using html,
                            best course for beginner
                          </div>
                          <div className="course_footer d-flex align-items-center justify-content-start">
                            <div className="course_author_image">
                              <img
                                src="images/featured_author.jpg"
                                alt="https://unsplash.com/@anthonytran"
                              />
                            </div>
                            <div className="course_author_name">
                              By <a href="#">James S. Morrison</a>
                            </div>
                            <div className="course_sales ml-auto">
                              <span>100</span> Participants
                            </div>
                          </div>
                          <div className="col text-center">
                            <div className="button teachers_button">
                              <Link to="/instructors">
                                Enroll
                                <div className="button_arrow">
                                  <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Slider Item */}
                    <div className="owl-item">
                      <div className="course">
                        <div className="course_image">
                          <img
                            width="50px"
                            src="https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo"
                          />
                        </div>
                        <div className="course_body">
                          <div className="course_header d-flex flex-row align-items-center justify-content-start">
                            <div className="course_tag">
                              <a href="#">INtERMEDAIRE</a>
                            </div>
                            {/* <div className="course_price ml-auto">
                              Price: <span>$35</span>
                            </div> */}
                          </div>
                          <div className="course_title">
                            <h3>
                              <a href="courses.html">CSS3 Course</a>
                            </h3>
                          </div>
                          <div className="course_text">
                            learn css animation, media query, and css transiton
                            and more.
                          </div>
                          <div className="course_footer d-flex align-items-center justify-content-start">
                            <div className="course_author_image">
                              <img src="images/course_author_2.jpg" />
                            </div>
                            <div className="course_author_name">
                              By <a href="#">Mark Smith</a>
                            </div>
                            <div className="course_sales ml-auto">
                              <span>566</span> participants
                            </div>
                          </div>
                          <div className="col text-center">
                            <div className="button teachers_button">
                              <Link to="/instructors">
                                Enroll
                                <div className="button_arrow">
                                  <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Slider Item */}
                    <div className="owl-item">
                      <div className="course">
                        <div className="course_image">
                          <img
                            width="50px"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab05l3ndGtZqyqxgTeOkmB7g2eDGyYrQp60gRu108tIEXOLQTl8tf9Jpx90UiNJEIv1Q&usqp=CAU"
                            alt="https://unsplash.com/@annademy"
                          />
                        </div>
                        <div className="course_body">
                          <div className="course_header d-flex flex-row align-items-center justify-content-start">
                            <div className="course_tag">
                              <a href="#">BEGINNER</a>
                            </div>
                            {/* <div className="course_price ml-auto">
                              Price: <span>$35</span>
                            </div> */}
                          </div>
                          <div className="course_title">
                            <h3>
                              <a href="courses.html">javascript Course</a>
                            </h3>
                          </div>
                          <div className="course_text">
                            learn about the interactive language javascirpt
                          </div>
                          <div className="course_footer d-flex align-items-center justify-content-start">
                            <div className="course_author_image">
                              <img src="images/course_author_3.jpg" />
                            </div>
                            <div className="course_author_name">
                              By <a href="#">Julia Williams</a>
                            </div>
                            <div className="course_sales ml-auto">
                              <span>352</span> participants
                            </div>
                          </div>
                          <div className="col text-center">
                            <div className="button teachers_button">
                              <Link to="/instructors">
                                Enroll
                                <div className="button_arrow">
                                  <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Courses Slider Nav */}
                  <div className="courses_slider_nav courses_slider_prev trans_200">
                    <i className="fa fa-angle-left" aria-hidden="true" />
                  </div>
                  <div className="courses_slider_nav courses_slider_next trans_200">
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Milestones */}
        <div className="milestones">
          {/* Background image artis https://unsplash.com/@thepootphotographer */}
          <div
            className="parallax_background parallax-window"
            data-parallax="scroll"
            data-image-src="images/milestones.jpg"
            data-speed="0.8"
          />
          <div className="container">
            <div className="row milestones_container">
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src="images/milestone_1.svg" alt />
                  </div>
                  <div className="milestone_counter" data-end-value={1548}>
                    0
                  </div>
                  <div className="milestone_text">Online Courses</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src="images/milestone_2.svg" />
                  </div>
                  <div className="milestone_counter" data-end-value={7286}>
                    0
                  </div>
                  <div className="milestone_text">Students</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src="images/milestone_3.svg" />
                  </div>
                  <div className="milestone_counter" data-end-value={257}>
                    0
                  </div>
                  <div className="milestone_text">Teachers</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src="images/milestone_4.svg" />
                  </div>
                  <div className="milestone_counter" data-end-value={39}>
                    0
                  </div>
                  <div className="milestone_text">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sections */}
        <div className="grouped_sections">
          <div className="container">
            <div className="row">
              {/* Why Choose Us */}
              <div className="col-lg-4 grouped_col">
                <div className="grouped_title">Why Choose Us?</div>
                <div className="accordions">
                  <div className="accordion_container">
                    <div className="accordion d-flex flex-row align-items-center active">
                      <div>Mauris vehicula nisi congue?</div>
                    </div>
                    <div className="accordion_panel">
                      <div>
                        <p>
                          Suspendisse tincidunt magna eget massa hendrerit
                          efficitur. Ut euismod pellentesque imperdiet. Cras
                          laoreet gravida lectus, at viverra lorem venenatis in.
                          Aenean id varius quam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion_container">
                    <div className="accordion d-flex flex-row align-items-center">
                      <div>Vehicula nisi congue, blandit?</div>
                    </div>
                    <div className="accordion_panel">
                      <div>
                        <p>
                          Suspendisse tincidunt magna eget massa hendrerit
                          efficitur. Ut euismod pellentesque imperdiet. Cras
                          laoreet gravida lectus, at viverra lorem venenatis in.
                          Aenean id varius quam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion_container">
                    <div className="accordion d-flex flex-row align-items-center">
                      <div>Mauris vehicula nisi congue?</div>
                    </div>
                    <div className="accordion_panel">
                      <div>
                        <p>
                          Suspendisse tincidunt magna eget massa hendrerit
                          efficitur. Ut euismod pellentesque imperdiet. Cras
                          laoreet gravida lectus, at viverra lorem venenatis in.
                          Aenean id varius quam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion_container">
                    <div className="accordion d-flex flex-row align-items-center">
                      <div>Nisi congue, blandit purus sed?</div>
                    </div>
                    <div className="accordion_panel">
                      <div>
                        <p>
                          Suspendisse tincidunt magna eget massa hendrerit
                          efficitur. Ut euismod pellentesque imperdiet. Cras
                          laoreet gravida lectus, at viverra lorem venenatis in.
                          Aenean id varius quam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Events */}
              <div className="col-lg-4 grouped_col">
                <div className="grouped_title">Upcoming Events</div>
                <div className="events">
                  {/* Event */}
                  <div className="event d-flex flex-row align-items-start justify-content-start">
                    <div>
                      <div className="event_date d-flex flex-column align-items-center justify-content-center">
                        <div className="event_day">20</div>
                        <div className="event_month">April</div>
                      </div>
                    </div>
                    <div className="event_body">
                      <div className="event_title">
                        <a href="#">New Marketing Course Release</a>
                      </div>
                      <div className="event_subtitle">
                        Location: Online Platform
                      </div>
                    </div>
                  </div>
                  {/* Event */}
                  <div className="event d-flex flex-row align-items-start justify-content-start">
                    <div>
                      <div className="event_date d-flex flex-column align-items-center justify-content-center">
                        <div className="event_day">23</div>
                        <div className="event_month">April</div>
                      </div>
                    </div>
                    <div className="event_body">
                      <div className="event_title">
                        <a href="#">Students Art Workshop</a>
                      </div>
                      <div className="event_subtitle">
                        Location: Online Platform
                      </div>
                    </div>
                  </div>
                  {/* Event */}
                  <div className="event d-flex flex-row align-items-start justify-content-start">
                    <div>
                      <div className="event_date d-flex flex-column align-items-center justify-content-center">
                        <div className="event_day">25</div>
                        <div className="event_month">April</div>
                      </div>
                    </div>
                    <div className="event_body">
                      <div className="event_title">
                        <a href="#">Launch Party for a new Platform</a>
                      </div>
                      <div className="event_subtitle">
                        Location: Online Platform
                      </div>
                    </div>
                  </div>
                  {/* Event */}
                  <div className="event d-flex flex-row align-items-start justify-content-start">
                    <div>
                      <div className="event_date d-flex flex-column align-items-center justify-content-center">
                        <div className="event_day">27</div>
                        <div className="event_month">April</div>
                      </div>
                    </div>
                    <div className="event_body">
                      <div className="event_title">
                        <a href="#">New Marketing Course</a>
                      </div>
                      <div className="event_subtitle">
                        Location: Online Platform
                      </div>
                    </div>
                  </div>
                  {/* Event */}
                  <div className="event d-flex flex-row align-items-start justify-content-start">
                    <div>
                      <div className="event_date d-flex flex-column align-items-center justify-content-center">
                        <div className="event_day">29</div>
                        <div className="event_month">April</div>
                      </div>
                    </div>
                    <div className="event_body">
                      <div className="event_title">
                        <a href="#">New Marketing Course</a>
                      </div>
                      <div className="event_subtitle">
                        Location: Online Platform
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* News */}
              <div className="col-lg-4 grouped_col">
                <div className="grouped_title">Latest News</div>
                <div className="news">
                  {/* News Post */}
                  <div className="news_post d-flex flex-row align-items-start justify-content-start">
                    <div>
                      <div className="news_post_image">
                        <img
                          src="images/news_1.jpg"
                          alt="https://unsplash.com/@beccatapert"
                        />
                      </div>
                    </div>
                    <div className="news_post_body">
                      <div className="news_post_date">April 02, 2018</div>
                      <div className="news_post_title">
                        <a href="news.html">Why Choose online education?</a>
                      </div>
                      <div className="news_post_author">
                        By <a href="#">William Smith</a>
                      </div>
                    </div>
                  </div>
                  {/* News Post */}
                  <div className="news_post d-flex flex-row align-items-start justify-content-start">
                    <div>
                      <div className="news_post_image">
                        <img
                          src="images/news_2.jpg"
                          alt="https://unsplash.com/@nbb_photos"
                        />
                      </div>
                    </div>
                    <div className="news_post_body">
                      <div className="news_post_date">April 02, 2018</div>
                      <div className="news_post_title">
                        <a href="news.html">Books, Kindle or tablet?</a>
                      </div>
                      <div className="news_post_author">
                        By <a href="#">William Smith</a>
                      </div>
                    </div>
                  </div>
                  {/* News Post */}
                  <div className="news_post d-flex flex-row align-items-start justify-content-start">
                    <div>
                      <div className="news_post_image">
                        <img
                          src="images/news_3.jpg"
                          alt="https://unsplash.com/@rawpixel"
                        />
                      </div>
                    </div>
                    <div className="news_post_body">
                      <div className="news_post_date">April 02, 2018</div>
                      <div className="news_post_title">
                        <a href="news.html">Why Choose online education?</a>
                      </div>
                      <div className="news_post_author">
                        By <a href="#">William Smith</a>
                      </div>
                    </div>
                  </div>
                  {/* News Post */}
                  <div className="news_post d-flex flex-row align-items-start justify-content-start">
                    <div>
                      <div className="news_post_image">
                        <img
                          src="images/news_4.jpg"
                          alt="https://unsplash.com/@jtylernix"
                        />
                      </div>
                    </div>
                    <div className="news_post_body">
                      <div className="news_post_date">April 02, 2018</div>
                      <div className="news_post_title">
                        <a href="news.html">Books, Kindle or tablet?</a>
                      </div>
                      <div className="news_post_author">
                        By <a href="#">William Smith</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video */}
        <div className="video">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="video_container_outer">
                  <div className="video_container">
                    {/* Video poster image artist: https://unsplash.com/@annademy */}
                    <video
                      id="vid1"
                      className="video-js vjs-default-skin"
                      controls
                      data-setup='{ "poster": "https://dentrepreneur.in/wp-content/uploads/2021/10/WHY.png", "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=H1mb3ARvSJo"}], "youtube": { "iv_load_policy": 1 } }'
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Join */}
        <div className="join">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="section_title text-center">
                  <h2>Join Our Platform Today</h2>
                </div>
                <div className="section_subtitle">
                  Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut
                  euismod pellentesque imperdiet. Cras laoreet gravida lectus,
                  at viverra lorem venenatis in. Aenean id varius quam. Nullam
                  bibendum interdum dui, ac tempor lorem convallis ut
                </div>
              </div>
            </div>
          </div>
          <div className="button join_button" style={{ zIndex: "5" }}>
            <Link
              to="/register"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              register now
              <div className="button_arrow">
                <i className="fa fa-angle-right" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
