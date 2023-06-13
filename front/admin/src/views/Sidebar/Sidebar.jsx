import React from "react";
import { Link } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
const Sidebar = () => {
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
      style={{ display: "block" }}
    >
      <div className="app-brand demo" >
        <a href="index.html" className="app-brand-link">
 
          <Link
            to="/login"
            style={{
              textTransform: "capitalize",
              paddingRight: "60px",
              fontSize: "1.5rem",
            }}
            className="app-brand-text demo menu-text fw-bolder ms-2"
          >
            <center>
            <img src="logo.png" width="180px" alt="" />

            </center>
          </Link>
        </a>
        <a
          href="javascript:void(0);"
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle" />
        </a>
      </div>
      <div className="menu-inner-shadow" />
      <ul className="menu-inner py-1">
        {/* Dashboard */}
        <li className="menu-item active">
          <Link to="/" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle" />
            <div data-i18n="Analytics">Tableau de bord</div>
          </Link>
        </li>
        {/* Layouts */}

        {/* Components */}
        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">NAVIGATION</span>
        </li>
        {/* Cards */}
        <li className="menu-item">
          <Link to="/formateurs" className="menu-link">
            <svg
              style={{ marginRight: "15px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>

            <div data-i18n="Basic">Teachers</div>
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/etudiant " className="menu-link">
          <svg
              style={{ marginRight: "15px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>

            <div data-i18n="Basic">Students</div>
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/formations" className="menu-link">
            {/* <i className="menu-icon tf-icons bx bxs-package" /> */}
            <svg
              style={{ marginRight: "15px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-file-earmark-minus-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6 8.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z" />
            </svg>
            <div data-i18n="Basic">Courses</div>
          </Link>
        </li>

        {/* User interface */}

        {/* Extended components */}

        <Link to="/notification" className="menu-item">
          <a href="icons-boxicons.html" className="menu-link">
            <i className="menu-icon tf-icons bx bxs-bell-ring" />

            <div data-i18n="Boxicons">Notifications</div>
          </a>
        </Link>
        {/* Forms & Tables */}

        {/* Forms */}

        {/* Tables */}
      </ul>
    </aside>
  );
};

export default Sidebar;
