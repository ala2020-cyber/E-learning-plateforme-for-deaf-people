import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [instructor, setInstructor] = useState([]);
  // get all courses
  const getALlcourses = async () => {
    await axios
      .get("http://localhost:5000/courses/")
      .then((res) => {
        res = res.data;
        setCourses(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getInstructor = async () => {
    await axios
      .get("http://localhost:5000/instructors/")
      .then((res) => {
        res = res.data;
        let instructor = [];

        Object.values(courses).map((course) => {
          Object.values(res).map((instructor) => {
            if (course._id === course._id) {
              console.log(course.Titre, instructor.Nom);
            }
          });
        });
        setInstructor(instructor);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getALlcourses();
  }, []);

  console.log(courses);
  console.log(instructor);

  return (
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
      {/* <Banner title="Courses" link="/" firstLink="Home" currentLink="courses" /> */}
      {/* <div className="home"> */}
      {/* Background image artist https://unsplash.com/@thepootphotographer */}
      {/* <div className="home_background parallax_background parallax-window" data-parallax="scroll" data-image-src="images/courses.jpg" data-speed="0.8" /> */}
      {/* <div className="home_container">
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
      </div> */}
      {/* </div> */}
      {/* Courses */}
      <div className="courses" style={{ marginTop: "170px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section_title text-center">
                <h2>Get Access to our online courses</h2>
              </div>
              <div className="section_subtitle" style={{ fontSize: "1.1rem" }}>
                Education is a powerful tool that can help you achieve success
                and open up a world of opportunities. By enrolling in courses,
                you will have the chance to learn new skills, gain knowledge,
                and meet new people who share your interests. You can explore
                new subjects, challenge yourself, and discover your passions.
              </div>
            </div>
          </div>
          {/* Course Search */}
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

          {/*all courses  */}
          {/* Course */}

          <div className="row courses_row">
            {Object.values(courses).map((item) => (
              <>
                <div
                  className="col-lg-4 col-md-6"
                  style={{ marginBlock: "45px" }}
                >
                  <div className="course">
                    <div>
                      <img
                        style={{
                          height: "185px",
                          width: "415px",
                          objectFit: "scale-down",
                        }}
                        src={item.imageCoursePath}
                        alt
                      />
                    </div>
                    <div className="course_body" style={{ height: "600px" }}>
                      <div
                        style={{ textTransform: "uppercase" }}
                        className="course_header d-flex flex-row align-items-center justify-content-between"
                      >
                        <div
                          className="course_tag"
                          style={{
                            color: "white",
                            padding: "5px 10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "12px",
                            fontSize: "12px",
                          }}
                        >
                          {item.niveauFormation}
                        </div>
                        <span>
                          <ClassOutlinedIcon
                            style={{ fontSize: "18px", marginBottom: "2px" }}
                          />{" "}
                          {item.categorie}
                        </span>
                        <div>
                          <LanguageOutlinedIcon
                            style={{ fontSize: "18px", marginBottom: "2px" }}
                          />{" "}
                          {item.Langue}
                        </div>
                      </div>
                      <div className="course_title">
                        <h3
                          style={{
                            textTransform: "uppercase",
                            fontWeight: "bold",
                          }}
                        >
                          <Link to={`/course/${item._id}`}>{item.Titre}</Link>
                        </h3>
                      </div>
                      <div className="course_text">{item.Description}</div>
                      <div className="course_footer d-flex align-items-center justify-content-start">
                        <div className="course_author_image">
                          <img
                            src="images/course_author_2.jpg"
                            alt="https://unsplash.com/@anthonytran"
                          />
                        </div>
                        <div className="course_author_name">
                          By <a href="#">Mark Smith</a>
                        </div>
                        <div className="course_sales ml-auto">
                          <span>{item.NombreParticipants}</span>{" "}
                          <Diversity3OutlinedIcon />
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
              </>
            ))}
          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col">
              <div className="courses_paginations">
                <ul>
                  <li className="active">
                    <a href="#">01</a>
                  </li>
                  <li>
                    <a href="#">02</a>
                  </li>
                  <li>
                    <a href="#">03</a>
                  </li>
                  <li>
                    <a href="#">04</a>
                  </li>
                  <li>
                    <a href="#">05</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Courses;
