import React from "react";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Swal from "sweetalert2";
import { useState } from "react";
import CommandeService from "../../service/CommandeService";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useEffect } from "react";


const EditCommande = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  
const { id } = useParams();
  const onChangehandle = (e) => {
    setData({
      // ... bich nbadlou e data
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandle = (e) => {
    
    e.preventDefault();
    // const formdata = new FormData();
    
    // formdata.append("ref", data.ref);
    // formdata.append("numero", data.numero);
    // formdata.append("clientphonenumber", data.clientphonenumber);
    // formdata.append("address", data.address);
    // formdata.append("price_total", data.price_total);
    // formdata.append("time", data.time);
    // formdata.append("distance", data.distance);
    // formdata.append("date", data.date);
    // formdata.append("position.lat", data.position.lat);
    // formdata.append("position.lng", data.position.lng);
    // formdata.append("description", data.description);
    // formdata.append("commentaire", data.commentaire);
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
           navigate("/commande");
          CommandeService.update(id, data)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
  };
  useEffect(() => {
    CommandeService.get(id)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const onHandlefile = (e) => {
  //   console.log(e);
  //   setfiles(e.target.files);
  // };

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
                      placeholder="Search..."
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
            {/* / Navbar */}
            {/* Content wrapper */}
            <div className="content-wrapper">
              {/* Content */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="text-muted fw-light">Commandes /</span> mise
                  à jour du commande
                </h4>
                <div style={{ width: "50%", margin: "auto" }} className="row">
                  <div className="col-xl">
                    <div className="card mb-4">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Order Details</h5>
                        <small className="text-muted float-end"></small>
                      </div>
                      <div className="card-body">
                        <form onSubmit={onSubmitHandle}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              Reference
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={onChangehandle}
                              value={data.ref}
                              name="ref"
                              id="basic-default-fullname"
                              placeholder="H4Fo4lxx"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-company"
                            >
                              Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basic-default-company"
                              onChange={onChangehandle}
                              name="numero"
                              value={data.numero}
                              placeholder="205852"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-email"
                            >
                              address
                            </label>
                            <div className="input-group input-group-merge">
                              <input
                                type="text"
                                id="basic-default-email"
                                className="form-control"
                                onChange={onChangehandle}
                                name="address"
                                value={data.address}
                                placeholder="Address"
                                aria-label="Address"
                                aria-describedby="basic-default-email2"
                              />
                              <span
                                className="input-group-text"
                                id="basic-default-email2"
                              ></span>
                            </div>
                            <div className="form-text">
                              You can use letters, numbers & periods
                            </div>
                          </div>

                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-phone"
                            >
                              client phone number
                            </label>
                            <input
                              type=" Number"
                              id="basic-default-phone"
                              className="form-control phone-mask"
                              onChange={onChangehandle}
                              name="clientphonenumber"
                              value={data.clientphonenumber}
                              placeholder="+216 XX-XXX-XXX"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-company"
                            >
                              price total
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              onChange={onChangehandle}
                              name="price_total"
                              value={data.price_total}
                              id="basic-default-company"
                              placeholder="--- TND"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-company"
                            >
                              time
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={onChangehandle}
                              name="time"
                              value={data.time}
                              id="basic-default-company"
                              placeholder="--:--"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-company"
                            >
                              distance
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              onChange={onChangehandle}
                              name="distance"
                              value={data.distance}
                              id="basic-default-company"
                              placeholder="---,-- KM"
                            />
                          </div>
                          {/* <div className="mb-3">
                          <label
                            className="form-label"
                            for="basic-default-company"
                          >
                            date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="basic-default-company"
                            onChange={onChangehandle}
                            name="date"
                            value={data.date}
                            placeholder="--/--/---"
                          />
                        </div> */}
                          <div className="mb-3">
                            {/* <label
                            className="form-label"
                            for="basic-default-company"
                          >
                            Latitude
                          </label> */}
                            {/* <input
                            type="text"
                            className="form-control"
                            id="basic-default-company"
                            onChange={onChangehandle}
                            name="position.lat"
                            value={data.position.lat}
                            placeholder="--,----"
                          /> */}
                          </div>
                          <div className="mb-3">
                            {/* <label
                            className="form-label"
                            for="basic-default-company"
                          >
                            Longitude
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="basic-default-company"
                            onChange={onChangehandle}
                            name="position.lng"
                            value={data.position.lng}
                            placeholder="--,----"
                          /> */}
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-message"
                            >
                              description
                            </label>
                            <textarea
                              id="basic-default-message"
                              className="form-control"
                              onChange={onChangehandle}
                              name="description"
                              value={data.description}
                              placeholder="-Ecran MSI Pro 23.8 IPS Full HD MP242 : 475,000 TND
                           - REDRAGON Laptop Cooler Support GCP500 : 99,000 TND
                           - SOURIS REDRAGON M601-3 CENTROPHORUS : 28,000 TND"
                            ></textarea>
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-message"
                            >
                              comment
                            </label>
                            <textarea
                              id="basic-default-message"
                              className="form-control"
                              onChange={onChangehandle}
                              name="commentaire"
                              value={data.commentaire}
                              placeholder="Express Delivery"
                            ></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Enregistrer
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* / Content */}
              {/* Footer */}

              {/* / Footer */}
              <div classNameName="content-backdrop fade" />
            </div>

            {/* Content wrapper */}
          </div>
          {/* / Layout page */}
        </div>
        {/* Overlay */}
        <div classNameName="layout-overlay layout-menu-toggle" />
      </div>
      <Footer />
    </div>
  );
}

export default EditCommande;
