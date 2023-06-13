import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HistoryIcon from "@mui/icons-material/History";
import VerifiedIcon from "@mui/icons-material/Verified";
import PendingIcon from "@mui/icons-material/Pending";

import { FaUser, FaCaretDown } from "react-icons/fa";
import TuneIcon from "@mui/icons-material/Tune";
import { useSelector, useDispatch } from "react-redux";
import { logoutStudent, resetStudent } from "../features/auth/authSliceStudent";
import {
  logoutInstructor,
  resetInstructor,
} from "../features/auth/authSliceInstructor";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = (props) => {
  const refresh = () => {
    window.location.reload(true);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { student, isSuccess } = useSelector((state) => state.authStudent);
  const { instructor } = useSelector((state) => state.authInstructor);

  const onLogoutStudent = () => {
    dispatch(logoutStudent());
    dispatch(resetStudent());
    toast.success("successfully logout !");
    navigate("/courses");
  };

  const onLogoutInstructor = () => {
    dispatch(logoutInstructor());
    dispatch(resetInstructor());
    toast.success("successfully logout !");
    navigate("/");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [statut, setStatut] = useState("");

  const getStatut = async () => {
    await axios
      .get("http://localhost:5000/instructors/" + instructor?.id)
      .then((res) => {
        setStatut(res.data.Statut);
      });
  };


  useEffect(() => {
    getStatut();
  }, []);
  return (
    <div>
      {/* Header */}
      <header className="header">
        {student ? (
          <>
            {/* Header Content */}
            <div
              className="header_container"
              style={{
                position: "fixed",
                top: "0px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <div
                className=""
                style={{ marginInline: "auto", maxWidth: "80vw" }}
              >
                <div className="row">
                  <div className="col">
                    <div className="header_content d-flex flex-row align-items-center justify-content-start">
                      <div className="logo_container">
                        <div
                          className="logo_content d-flex flex-row align-items-end justify-content-start"
                          style={{ cursor: "pointer" }}
                        >
                          <Link to="/">
                            <img src="/images/logo.png" width="130px" alt />
                          </Link>
                        </div>
                      </div>

                      <nav className="main_nav_contaner ml-auto">
                        <ul className="main_nav">
                          <li className="courses_link">
                            <div
                              className="courses_link"
                              style={{ display: "flex", cursor: "pointer" }}
                            >
                              Categories{" "}
                              <FaCaretDown style={{ fontSize: "20px" }} />
                            </div>
                          </li>

                          <input
                            type="search"
                            name="recherche"
                            placeholder="Search for a course"
                            style={{
                              margin: "20px 50px",
                              height: "35px",
                              width: "500px",
                              borderRadius: "20px",
                              padding: "10px",
                            }}
                          />

                          <li className="courses_link" onClick={refresh}>
                            <Link to="/courses">📚 Courses</Link>
                          </li>
                          <li className="courses_link" onClick={refresh}>
                            <Link to={`/profile/etudiant/${props.id}`}>
                              <FaUser /> profile
                            </Link>
                          </li>
                          <button
                            onClick={onLogoutStudent}
                            style={{
                              fontSize: "22px",
                              color: "black",
                              marginLeft: "30px",
                              cursor: "pointer",
                              backgroundColor: " transparent",

                              position: "relative",
                              top: "7px",
                              border: "none",
                            }}
                          >
                            <LogoutIcon
                              style={{ marginBottom: "15px", fontSize: "20px" }}
                            />
                          </button>
                        </ul>
                        {/* Hamburger */}
                        <div className="hamburger menu_mm">
                          <i
                            className="fa fa-bars menu_mm"
                            aria-hidden="true"
                          />
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {instructor ? (
              <>
                {/* Header Content */}
                <div
                  className="header_container"
                  style={{
                    position: "fixed",
                    top: "0px",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="header_content d-flex flex-row align-items-center ">
                          <div className="logo_container">
                            <div
                              className="logo_content d-flex flex-row align-items-end justify-content-start"
                              style={{ cursor: "pointer" }}
                            >
                              <div className="logo_img" onClick={refresh}>
                                <Link to="/">
                                  <img
                                    src="/images/logo.png"
                                    width="130px"
                                    alt
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* <b>
                            <h4
                              style={{
                                fontWeight: "bold",
                                marginLeft: "35px",
                                // textTransform: "uppercase",
                              }}
                            >
                              welcome {instructor.Nom} {instructor.Prenom} 👋
                            </h4>
                          </b> */}
                          <nav className="main_nav_contaner ml-auto">
                            <ul className="main_nav">
                              <li className="courses_link" onClick={refresh}>
                                <Link to="/formateur">
                                  <TuneIcon
                                    style={{
                                      fontSize: "19px",
                                      margin: "-5px 5px 0 0",
                                    }}
                                  />
                                  <span style={{ fontSize: "16px" }}>
                                    Dashboard
                                  </span>
                                </Link>
                              </li>
                              <li className="courses_link" onClick={refresh}>
                                <Link to={`/historique/formateur/${props.id}`}>
                                  <HistoryIcon
                                    style={{
                                      fontSize: "19px",
                                      margin: "-5px 5px 0 0",
                                    }}
                                  />
                                  <span style={{ fontSize: "16px" }}>
                                    Historique
                                  </span>
                                </Link>
                              </li>

                              <li
                                className="courses_link"
                                style={{ cursor: "pointer" }}
                              >
                                <span
                                  id="basic-button"
                                  aria-controls={
                                    open ? "basic-menu" : undefined
                                  }
                                  aria-haspopup="true"
                                  aria-expanded={open ? "true" : undefined}
                                  onClick={handleClick}
                                >
                                  {instructor?.ImageProfil ? (
                                    <img
                                      src={instructor?.ImageProfil}
                                      width="40px"
                                      height="40px"
                                      style={{
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                      }}
                                    />
                                  ) : (
                                    <FaUser
                                      style={{
                                        fontSize: "15px",
                                        margin: "-5px 5px 0 0",
                                      }}
                                    />
                                  )}

                                  {statut == "pending" ? (
                                    <span
                                      className="status"
                                      style={{
                                        position: "absolute",
                                        top: "-13px",
                                      }}
                                    >
                                      <PendingIcon
                                        style={{
                                          color: "red",
                                          fontSize: "20px",
                                        }}
                                      />
                                    </span>
                                  ) : (
                                    <span
                                      className="status"
                                      style={{
                                        position: "absolute",
                                        top: "-13px",
                                      }}
                                    >
                                      <VerifiedIcon
                                        style={{
                                          color: "green",
                                          fontSize: "20px",
                                        }}
                                      />
                                    </span>
                                  )}
                                </span>
                              </li>

                              <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                  "aria-labelledby": "basic-button",
                                }}
                              >
                                <MenuItem onClick={handleClose}>
                                  <Link
                                    to={`/profile/formateur/${props.id}`}
                                    style={{ color: "black" }}
                                  >
                                    Profile
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  <Link
                                    to={`/formateur/editProfile/${props.id}`}
                                    style={{ color: "black" }}
                                  >
                                    Edit Profile
                                  </Link>
                                </MenuItem>
                                <MenuItem
                                  onClick={() => {
                                    onLogoutInstructor();
                                    handleClose();
                                  }}
                                >
                                  Logout
                                  <LogoutIcon
                                    style={{
                                      marginLeft: "13px",
                                      fontSize: "18px",
                                    }}
                                  />
                                </MenuItem>
                              </Menu>
                            </ul>

                            {/* Hamburger */}
                            <div className="hamburger menu_mm">
                              <i
                                className="fa fa-bars menu_mm"
                                aria-hidden="true"
                              />
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Top Bar */}
                <div className="top_bar" style={{}}>
                  <div className="top_bar_container">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                            <ul className="top_bar_contact_list"></ul>
                            <div className="top_bar_login ml-auto">
                              <ul>
                                <li onClick={refresh}>
                                  <Link to="/register">Register</Link>
                                </li>
                                <li onClick={refresh}>
                                  <Link to="/signin">Login</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Header Content */}
                <div className="header_container">
                  <div
                    className=""
                    style={{ marginInline: "auto", maxWidth: "80vw" }}
                  >
                    <div className="row">
                      <div className="col">
                        <div className="header_content d-flex flex-row align-items-center justify-content-start">
                          <div className="logo_container">
                            <div
                              className="logo_content d-flex flex-row align-items-end justify-content-start"
                              style={{ cursor: "pointer" }}
                            >
                              <Link to="/">
                                <img src="/images/logo.png" width="130px" alt />
                              </Link>
                            </div>
                          </div>

                          <nav className="main_nav_contaner ml-auto">
                            <ul className="main_nav">
                              <li className="courses_link">
                                <div
                                  className="courses_link"
                                  style={{
                                    display: "flex",
                                    cursor: "pointer",
                                  }}
                                >
                                  Categories{" "}
                                  <FaCaretDown style={{ fontSize: "20px" }} />
                                </div>
                              </li>
                              <ul className="main_nav">
                                <li className="courses_link" onClick={refresh}>
                                  <Link to="/courses">courses</Link>
                                </li>
                                <li className="about_link" onClick={refresh}>
                                  <Link to="/about">about</Link>
                                </li>
                              </ul>

                              <input
                                type="search"
                                name="recherche"
                                placeholder="Search for a course"
                                style={{
                                  margin: "20px 10px",
                                  height: "35px",
                                  width: "400px",
                                  borderRadius: "20px",
                                  padding: "10px",
                                }}
                              />
                              <i
                                class="fa fa-search"
                                style={{
                                  fontSize: "20px",
                                  cursor: "pointer",
                                  paddingRight: "30px",
                                }}
                              ></i>
                              <li className=" active" onClick={refresh}>
                                <Link to="/BecomeInstructor">
                                  Become Instructor
                                </Link>
                              </li>
                            </ul>
                            {/* Hamburger */}
                            <div className="hamburger menu_mm">
                              <i
                                className="fa fa-bars menu_mm"
                                aria-hidden="true"
                              />
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </header>
    </div>
  );
};

export default Header;
