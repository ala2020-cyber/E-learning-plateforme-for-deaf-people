import React from "react";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Swal from "sweetalert2";
import { useState } from "react";
import LivreurService from "../../service/LivreurService";
import { useNavigate } from "react-router";

const AddLivreurFrom = () => {
  const navigate = useNavigate();
  const [livreur, setUsers] = useState([]);
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
    const formdata = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append("photo", files[i]);
    }
    formdata.append("firstname", data.firstname);
    formdata.append("lastname", data.lastname);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("address", data.address);
    formdata.append("currentlocation", data.currentlocation);
    formdata.append("phone", data.phone);
    formdata.append("jobtitle", data.jobtitle);
    formdata.append("staut", data.staut);
    formdata.append("description", data.description);

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/livreur");
        LivreurService.create(formdata)
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
  const onHandlefile = (e) => {
    console.log(e);
    setfiles(e.target.files);
  };
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
                  <span className="text-muted fw-light">Livreurs /</span>{" "}
                  Ajouter un livreur
                </h4>
                <div className="row">
                  <div className="col-md-12">
                    <ul className="nav nav-pills flex-column flex-md-row mb-3"></ul>
                    <div className="card mb-4">
                      <h5 className="card-header"> Détails du profil</h5>
                      {/* Account */}
                      <div className="card-body">
                        <div className="d-flex align-items-start align-items-sm-center gap-4">
                          <img
                            src="../assets/img/avatars/8.jpg"
                            alt="user-avatar"
                            className="d-block rounded"
                            height={100}
                            width={100}
                            id="uploadedAvatar"
                          />
                          <div className="button-wrapper">
                            <label
                              htmlFor="upload"
                              className="btn btn-primary me-2 mb-4"
                              tabIndex={0}
                            >
                              <span className="d-none d-sm-block">
                                Télécharger une nouvelle photo
                              </span>
                              <i className="bx bx-upload d-block d-sm-none" />
                              <input
                                onChange={onHandlefile}
                                value={data.photo}
                                name="photo"
                                type="file"
                                id="upload"
                                className="account-file-input"
                                hidden
                                accept="image/png, image/jpeg"
                              />
                            </label>
                            <button
                              type="button"
                              className="btn btn-outline-secondary account-image-reset mb-4"
                            >
                              <i className="bx bx-reset d-block d-sm-none" />
                              <span className="d-none d-sm-block"> Réinitialiser </span>
                            </button>
                            <p className="text-muted mb-0">
                              JPG, GIF ou PNG autorisés. Taille maximale de 800K
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr className="my-0" />
                      <div className="card-body">
                        <form
                          id="formAccountSettings"
                          onSubmit={onSubmitHandle}
                        >
                          <div className="row">
                            <div className="mb-3 col-md-6">
                              <label htmlFor="firstName" className="form-label">
                                Prénom
                              </label>
                              <input
                                onChange={onChangehandle}
                                className="form-control"
                                type="text"
                                name="firstname"
                                autofocus
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label htmlFor="lastName" className="form-label">
                                Nom du famile
                              </label>
                              <input
                                onChange={onChangehandle}
                                className="form-control"
                                type="text"
                                name="lastname"
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label htmlFor="email" className="form-label">
                                E-mail
                              </label>
                              <input
                                onChange={onChangehandle}
                                className="form-control"
                                type="email"
                                name="email"
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label
                                htmlFor="organization"
                                className="form-label"
                              >
                                Mot du passe
                              </label>
                              <input
                                onChange={onChangehandle}
                                type="password"
                                className="form-control"
                                name="password"
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label
                                className="form-label"
                                htmlFor="phoneNumber"
                              >
                                Numéro du téléphone
                              </label>
                              <div className="input-group input-group-merge">
                                <span className="input-group-text">
                                  TN (+216)
                                </span>
                                <input
                                  onChange={onChangehandle}
                                  type="text"
                                  name="phone"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="mb-3 col-md-6">
                              <label htmlFor="address" className="form-label">
                                Addresse du livreur
                              </label>
                              <input
                                onChange={onChangehandle}
                                type="text"
                                className="form-control"
                                name="address"
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label htmlFor="address" className="form-label">
                                Description
                              </label>
                              <input
                                onChange={onChangehandle}
                                type="text"
                                className="form-control"
                                name="description"
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label htmlFor="address" className="form-label">
                                Emploi
                              </label>
                              <input
                                onChange={onChangehandle}
                                type="text"
                                className="form-control"
                                name="jobtitle"
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label htmlFor="address" className="form-label">
                                Statut
                              </label>
                              <input
                                onChange={onChangehandle}
                                type="text"
                                className="form-control"
                                name="staut"
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label htmlFor="state" className="form-label">
                                Zone du livraison
                              </label>
                              <input
                                onChange={onChangehandle}
                                className="form-control"
                                type="text"
                                name="currentlocation"
                              />
                            </div>
                          </div>
                          <div className="mt-2">
                            <button
                              type="submit"
                              className="btn btn-primary me-2"
                            >
                              Enregistrer le compte
                            </button>
                            <button
                              type="reset"
                              className="btn btn-outline-secondary"
                            >
                              Annuler
                            </button>
                          </div>
                        </form>
                      </div>
                      {/* /Account */}
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
      <Footer />
    </div>
  );
};

export default AddLivreurFrom;
