import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { useState } from "react";
import LivreurService from "../../service/LivreurService";
import { useEffect } from "react";
import ClientService from "../../service/ClientService";
import CommandeService from "../../service/CommandeService";

import axios from "axios";
function Home() {

  const [nbFormateur, setNbFormateur]= useState();
  const [nbEtudiant, setNbEtudiant]= useState();
  const [nbFormation, setNbFormation]= useState();


  const getNbFormateur= async() => {
     await axios 
       .get("http://localhost:5000/instructors/")
       .then(res => {setNbFormateur(res.data.length)})
  }
  const getNbEtudiant= async() => {
     await axios 
       .get("http://localhost:5000/students")
       .then(res => {setNbEtudiant(res.data.length)})
  }
  const getNbFormations= async() => {
     await axios 
       .get("http://localhost:5000/courses/")
       .then(res => {setNbFormation(res.data.length)})
  }
 
useEffect(() => {
  getNbFormateur();
  getNbEtudiant();
  getNbFormations();
}, [])

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
                            <span className="align-middle">Paramètres</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <span className="d-flex align-items-center align-middle">
                              <i className="flex-shrink-0 bx bx-credit-card me-2" />
                              <span className="flex-grow-1 align-middle">
                                Facturation
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
                            <span className="align-middle">Déconnexion</span>
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
              <div className="container-xxl flex-grow-4 container-p-y">
                <div>
                  <div className="col-lg-4 col-lg-4 order-4">
                    <div className="" style={{ display: "flex", gap: "20px" }}>
                      <div className="col-lg-8 col-md-2 col-2 mb-4">
                        <div className="card">
                          {/* card1  */}
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                              <div className="">
                                <img
                                  src="https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                  alt="chart success"
                                  className="rounded"
                                  height="200px"
                                  width="220px"
                                  style={{objectFit:"contain"}}
                                />
                              </div>
                
                            </div>
                            <span className="fw-semibold d-block mb-1">
                              Teachers
                            </span>
                            <h3 className="card-title mb-2">
                              {nbFormateur}
                            </h3>
                            {/* <small className="text-success fw-semibold">
                              <i className="bx bx-up-arrow-alt" />
                            </small> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-2 col-2 mb-4">
                        <div className="card" >
                          {/* card2  */}
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                              <div className="">
                                <img
                                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                  alt="Credit Card"
                                  className="rounded"
                                  height="200px"
                                  width="220px"
                                  style={{objectFit:"contain"}}

                                />
                              </div>

                            </div>
                            <span  className="fw-semibold d-block mb-1"
                            >Students</span>
                            <h3 className="card-title text-nowrap mb-1">
                              {nbEtudiant}
                            </h3>
                            {/* <small className="text-success fw-semibold">
                              <i className="bx bx-up-arrow-alt" /> +28.42%
                            </small> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-8 col-md-2 col-2 mb-4">
                        <div className="card">
                          {/* card 3  */}
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                              <div className="">
                                <img
                                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                  alt="Credit Card"
                                  className="rounded"
                                  height="200px"
                                  width="220px"
                                  style={{objectFit:"contain"}}
                                  

                                  />
                              </div>
    
                            </div>
                            <span className="fw-semibold d-block mb-1"
                            >Courses</span>
                            <h3 className="card-title text-nowrap mb-2">
                              
                               {nbFormation}

                            </h3>
  
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-2 col-2 mb-4">
                        <div className="card">
                            {/* card 4 */}
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                              <div className="">
                                <img
                                  src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bm90aWZpY2F0aW9uc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                  alt="Credit Card"
                                  className="rounded"
                                  height="200px"
                                  width="220px"
                                  style={{objectFit:"contain"}}

                                  />
                              </div>
    
                            </div>
                            <span className="fw-semibold d-block mb-1"
                            >Notifications</span>
                            <h3 className="card-title text-nowrap mb-2">
                              
                               0

                            </h3>
  
                          </div>
                        </div>
                      </div>

              
                    </div>
                  </div>

                </div>



                {/* <div className="col-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                        <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5932.469388872591!2d10.62737916188611!3d35.83179624367131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275759ac9d10d%3A0x698e3915682cef7d!2sSousse!5e0!3m2!1sfr!2stn!4v1653527722915!5m2!1sfr!2stn"
                            width="1000"
                            height="350"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                        <div id="profileReportChart" />
                      </div>
                    </div>
                  </div>
                </div> */}



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
      <Footer />
    </div>
  );
};

export default Home;
