import React from "react";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";



const FormateurHeader = (props) => {
  const refresh = () => window.location.reload(true);

  return (
    <div>
      {/* Header */}
      <header className="header">

        {/* Header Content */}
        <div className="header_container">
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
                          <img src="images/logo.png" width="130px" alt />
                        </Link>
                      </div>

                    </div>
                  </div>
                  <b>
                    <h4
                      style={{
                        fontWeight: "bold",
                        marginLeft: "35px",
                        textTransform: "uppercase",
                      }}
                    >
                      Espace Formateur
                    </h4>
                  </b>
                  <nav className="main_nav_contaner ml-auto">
                    <ul className="main_nav">
                      <a className="home_link" onClick={refresh}>
                        <Link to="">
                          <PersonIcon
                            style={{
                              fontSize: "22px",
                              color: "black",
                              marginLeft: "30px",
                            }}
                          />
                        </Link>
                      </a>
                      <a className="home_link" onClick={refresh}>
                        <Link>
                          <LogoutIcon
                            style={{
                              fontSize: "22px",
                              color: "black",
                              marginLeft: "30px",
                            }}
                          />
                        </Link>
                      </a>
                    </ul>

                    {/* Hamburger */}
                    <div className="hamburger menu_mm">
                      <i className="fa fa-bars menu_mm" aria-hidden="true" />
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FormateurHeader;
