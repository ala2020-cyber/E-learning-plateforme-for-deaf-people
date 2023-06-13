import React from "react";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Swal from "sweetalert2";
import { useState } from "react";
import NotificationService from "../../service/NotificationService";
import { useNavigate } from "react-router";

const Notification = () => {
   const navigate = useNavigate();
   const [notification, setUsers] = useState([]);
   const [data, setData] = useState({});
   const [files, setfiles] = useState([]);

   const onChangehandle = (e) => {
     setData({
       // ... bich nbadlou e data
       ...data,
       [e.target.name]: e.target.value,
     });
   };

   const onSubmitHandle = (e) => {
     e.preventDefault();

     Swal.fire({
       title: "Do you want to save the changes?",
       showDenyButton: true,
       showCancelButton: true,
       confirmButtonText: "Save",
       denyButtonText: `Don't save`,
     }).then((result) => {
       /* Read more about isConfirmed, isDenied below */
       if (result.isConfirmed) {
         //  navigate("/commande");
         NotificationService.create(data)
           .then((res) => {
             setData(res.data.data);
             console.log(res);
           })
           .catch((err) => {
             console.log(err);
           });
         Swal.fire("Saved!", "", "success");
         window.location.reload(false);
       } else if (result.isDenied) {
         Swal.fire("Changes are not saved", "", "info");
       }
     });
   };

  return (
    <div>
      {/* Layout wrapper */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* Menu */}
          <Sidebar />
          {/* / Menu */}
          {/* Layout container */}
          <div className="layout-page">
            {/* Navbar */}
            <div
              className="container-xxl flex-grow-1 "
              style={{
                paddingTop: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <button
                style={{
                  padding: " 0 20px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "12px",
                }}
                type="button"
                className="btn btn-primary "
                onClick={function () {
                  let sideBar = document.getElementById("layout-menu");
                  if (sideBar.style.display == "none") {
                    sideBar.style.display = "block";
                  } else {
                    sideBar.style.display = "none";
                  }
                }}
              >
                <i className="bx bx-menu" />
              </button>

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
            </div>
            {/* / Navbar */}
            {/* Content wrapper */}
            <div className="content-wrapper">
              {/* Content */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="text-muted fw-light">
                    <i
                      style={{ fontSize: "25px" }}
                      className="menu-icon tf-icons bx bxs-bell-ring"
                    />
                    Navigation /
                  </span>{" "}
                  Notifications
                </h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <label
                        style={{ margin: "10px 30px 0 ", fontSize: "1.1rem" }}
                        class="col-sm-2 col-form-label"
                        for="basic-default-message"
                      >
                        Message
                      </label>
                      {/* Notifications */}

                      {/* Notifications */}
                      <div className="card-body">
                        <form onSubmit={onSubmitHandle}>
                          <div className="row">
                            <div class="row mb-3">
                              <div class="col-sm-10">
                                <textarea
                                  style={{ height: 200 }}
                                  id="basic-default-message"
                                  class="form-control"
                                  placeholder="Quoi du neuf ?"
                                  name="notif"
                                  onChange={onChangehandle}
                                  aria-label="Hi, Do you have a moment to talk Joe?"
                                  aria-describedby="basic-icon-default-message2"
                                ></textarea>
                              </div>
                            </div>

                            <div className="mt-4">
                              <button
                                type="submit"
                                className="btn btn-primary me-2"
                              >
                                Envoyer
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* /Notifications */}
                    </div>
                  </div>
                </div>
              </div>
              {/* / Content */}
              {/* Footer */}

              {/* / Footer */}
              <div className="content-backdrop fade" />
            </div>
            {/* Content wrapper */}
          </div>
          {/* / Layout page */}
        </div>
        {/* Overlay */}

        <div className="layout-overlay layout-menu-toggle" />
      </div>
      {/* / Layout wrapper */}

      {/* Core JS */}
      {/* build:js assets/vendor/js/core.js */}
      {/* endbuild */}
      {/* Vendors JS */}
      {/* Main JS */}
      {/* Page JS */}
      {/* Place this tag in your head or just before your close body tag. */}
      <Footer />
    </div>
  );
};

export default Notification;
