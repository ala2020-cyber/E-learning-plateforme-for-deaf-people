import React from "react";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import LivreurService from "../../service/LivreurService";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Formations = () => {
  const [formations, setformations] = useState([]);
  const [nomFormateur, setNomFormateur] = useState("");

  const getAllCourses = async () => {
    await axios
      .get("http://localhost:5000/courses/")
      .then((res) => {
        setformations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCourses = async (id) => {
    await axios.delete("http://localhost:5000/students/" + id).then(() => {
      Swal.fire("Deleted!", "Your course has deleted.", "success");
    });
  };



  const getNomFormateur = async (id) => {
    await axios.get("http://localhost:5000/instructors/" + id)
    .then((res) => {
      setNomFormateur(res.data.Prenom," ",res.data.Nom)
    });
  }


  useEffect(() => {
    getAllCourses();
  }, []);
  // const onDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085D6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       LivreurService.remove(id).then((res) => {
  //         GetAll();
  //       });
  //       Swal.fire("Deleted!", "Your insctructor has deleted.", "success");
  //     }
  //   });
  // };
  // const [data, setData] = useState({});
  // const [files, setfiles] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* Menu */}
          <Sidebar />
          {/* / Menu */}
          {/* Layout container */}
          <div className="layout-page">
            {/* Navbar */}
            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a
                  className="nav-item nav-link px-0 me-xl-4"
                  href="javascript:void(0)"
                >
                  <i className="bx bx-menu bx-sm" />
                </a>
              </div>
              <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                {/* Search */}
                <div className="navbar-nav align-items-center">
                  <div className="nav-item d-flex align-items-center">
                    <i className="bx bx-search fs-4 lh-0" />
                    <input
                      type="text"
                      className="form-control border-0 shadow-none"
                      placeholder="Rechercher..."
                      aria-label="Search..."
                      onChange={(event) => {
                        // setSearchTerm(event.target.value);
                      }}
                    />
                  </div>
                </div>
                {/* /Search */}
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  {/* Place this tag where you want the button to render. */}
                  <li className="nav-item lh-1 me-3">
                    <a
                      className="github-button"
                      data-icon="octicon-star"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                    >
                      Admin
                    </a>
                  </li>
                  {/* User */}
                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <div className="avatar avatar-online">
                        <img
                          src="../assets/img/avatars/1.png"
                          alt
                          className="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar avatar-online">
                                <img
                                  src="../assets/img/avatars/1.png"
                                  alt
                                  className="w-px-40 h-auto rounded-circle"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <span className="fw-semibold d-block">
                                John Doe
                              </span>
                              <small className="text-muted">Admin</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bx bx-user me-2" />
                          <span className="align-middle">My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bx bx-cog me-2" />
                          <span className="align-middle">Settings</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="d-flex align-items-center align-middle">
                            <i className="flex-shrink-0 bx bx-credit-card me-2" />
                            <span className="flex-grow-1 align-middle">
                              Billing
                            </span>
                            <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                              4
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="auth-login-basic.html"
                        >
                          <i className="bx bx-power-off me-2" />
                          <span className="align-middle">Log Out</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*/ User */}
                </ul>
              </div>
            </nav>
            {/* / Navbar */}
            {/* Content wrapper */}
            <div className="content-wrapper">
              {/* Content */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <svg
                    style={{ marginRight: "15px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-file-earmark-minus-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6 8.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z" />
                  </svg>
                  <span className="text-muted fw-light">Navigation /</span>{" "}
                  Courses
                </h4>

                {/* Basic Bootstrap Table */}

                {/* Bordered Table */}
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive text-nowrap">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th className="text-center">Id</th>
                            <th className="text-center">Title</th>
                            <th className="text-center">Category</th>
                            <th className="text-center">Level</th>
                            <th className="text-center">Language</th>
                            {/* <th className="text-center">Teacher</th> */}
                            {/* <th className="text-center">NbParticipants</th> */}
                            <th className="text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {formations
                            // .filter((item) => {
                            //   if (searchTerm == "") {
                            //     return item;
                            //   } else if (
                            //     item.Nom.toLowerCase().includes(
                            //       searchTerm.toLowerCase()
                            //     )
                            //   ) {
                            //     return item;
                            //   } else if (
                            //     item.prenom
                            //       .toLowerCase()
                            //       .includes(searchTerm.toLowerCase())
                            //   ) {
                            //     return item;
                            //   } else if (item.email.includes(searchTerm)) {
                            //     return item;
                            //   } else if (
                            //     item.Email.toString().includes(
                            //       searchTerm.toString()
                            //     )
                            //   ) {
                            //     return item;
                            //   } else if (
                            //     item._id
                            //       .toLowerCase()
                            //       .includes(searchTerm.toLowerCase())
                            //   ) {
                            //     return item;
                            //   }
                            // })
                            .map((item, index) => {
                              return (
                                <tr>
                                  <td>
                                      <strong>{index + 1}</strong>
                                  </td>

                                  <td>
                                      {item.Titre}
                                  </td>

                                  <td>
                                      {item.categorie}
                                  </td>

                                  <td>
                                      {item.niveauFormation}
                                  </td>

                                  <td>
                                      {item.Langue}
                                  </td>

                                  {/* <td>
                                    <center>{
                                      
                                      {nomFormateur}
                                      }</center>
                                  </td> */}

                                  <td>
                                    <center>
                                      <button
                                        type="button"
                                        className="btn btn-danger m-1"
                                        onClick={() =>
                                          deleteCourses(item._id)
                                        }
                                      >
                                        <i className="bx bx-trash" />
                                      </button>
                                    </center>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Footer */}

                {/* / Footer */}
                <div className="content-backdrop fade" />
              </div>
            </div>
            {/* Content wrapper */}
          </div>
          {/* / Layout page */}
        </div>
        {/* Overlay */}
        <div className="layout-overlay layout-menu-toggle" />
      </div>

      <Footer />
    </div>
  );
};

export default Formations;
