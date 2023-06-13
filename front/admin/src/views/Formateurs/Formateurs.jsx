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

const Formateurs = () => {
  const [formateurs, setFormateurs] = useState([]);
  const [newStatus,setNewStatus] = useState([]);


  const getAllFormateurs = async () => {
    await axios
      .get("http://localhost:5000/instructors/")
      .then((res) => {
        setFormateurs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFormateurs= async (id) => {
    await axios
    .delete("http://localhost:5000/instructors/"+id)
    .then(()=> {
      Swal.fire("Deleted!", "Your insctructor has deleted.", "success");
    })
  }

  const updateStatutFormateur= async (id,statut)=> {
    await axios
     .put("http://localhost:5000/instructors/"+id,{Statut:statut})
     .then(()=> {
      Swal.fire("Updated!", "Status instructor has been updated.", "success");
    })
  }

  // const [livreur, setUsers] = useState([]);
  // const GetAll = () => {
  //   LivreurService.getAll()
  //     .then((res) => {
  //       console.log(res);
  //       setUsers(res.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    getAllFormateurs();
    console.log(newStatus)
  }, [newStatus]);
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
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                  <span className="text-muted fw-light">Navigation /</span>{" "}
                  Teachers
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
                            <th className="text-center">Name</th>
                            <th className="text-center">LastName</th>
                            <th className="text-center">Job</th>
                            <th className="text-center">Email</th>
                            {/* <th className="text-center">Description</th> */}
                            <th className="text-center">Statut</th>
                            {/* <th className="text-center">Photo</th> */}
                            <th className="text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {formateurs
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
                                    <i className="fab fa-angular fa-lg text-danger me-3" />{" "}
                                    <strong>{index + 1}</strong>
                                  </td>
                                  <td>
                                    {item.Nom}
                                    {/* {item._id.length > 10
                                      ? `${item._id.substring(0, 10)}`
                                      : item._id} */}
                                  </td>
                                  <td>{item.Prenom}</td>
                                  <td>{item.Job}</td>
                                  <td>{item.Email}</td>
                                  {/* <td  width="200px">{item.Description}</td> */}

                                  <td>
                                    {/* <i className="fab fa-angular fa-lg text-danger me-3" />{" "} */}

                                    <select name="statut" id=""
                                    onChange={(e)=> {setNewStatus(e.target.value)}}
                                    >
                                      <option value={item.Statut}>
                                        {item.Statut}
                                      </option>
                                      <option value=   {item.Statut === "pending"
                                          ? "verified"
                                          : "pending"}>
                                        {item.Statut === "pending"
                                          ? "verified"
                                          : "pending"}
                                      </option>
                                    </select>
                                  </td>
                                  {/* <td>
                                    <span
                                      data-bs-toggle="tooltip"
                                      data-popup="tooltip-custom"
                                      data-bs-placement="top"
                                      className="avatar avatar-xs pull-up"
                                      title="Lilian Fuller"
                                    >
                                      <div>
                                        {item?.ImageProfil && (
                                          <img
                                            alt="Avatar"
                                            style={{
                                              width: "60px",
                                              heigth: "60px",
                                            }}
                                            src={
                                              "C:/Users/MSI/Desktop/e-learning platform/front/public" +
                                              item.ImageProfil
                                            }
                                          />
                                        )}
                                      </div>
                                    </span>
                                  </td> */}

                                  <td>
                                    {/* <button
                                      
                                      className="btn btn-primary m-1"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-eye"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                      </svg>
                                    </button> */}
                                    <button
                                      
                                      className="btn btn-primary m-1"
                                      onClick={()=> {
                                        updateStatutFormateur(item._id,newStatus)
                                      }}
                                    >
                                      <i className="bx bx-edit-alt" />
                                    </button>

                                    <button
                                      type="button"
                                      className="btn btn-danger m-1"
                                      onClick={() => deleteFormateurs(item._id)}
                                    >
                                      <i className="bx bx-trash" />
                                    </button>
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

export default Formateurs;
