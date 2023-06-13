import React from "react";
import { Link } from "react-router-dom";
import HistoryIcon from "@mui/icons-material/History";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";

import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';

// import SearchIcon from '@mui/icons-material/Search';
// <Search style={{marginRight:"80px"}}>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>

const Coursebar = (props) => {
  const refresh = () => window.location.reload(true);


  
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

  return (
    <div>
      {/* Header */}
      <header className="header" padding="20px">
        {/* Top Bar */}
        {/* <div className="top_bar">
          <div className="top_bar_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                    <ul className="top_bar_contact_list">
                      {/* <li><div className="question">Have any questions?</div></li>
                    <li>
                      <div>(009) 35475 6688933 32</div>
                    </li>
                    <li>
                      <div>info@elaerntemplate.com</div>
                    </li> */}
        {/* </ul>
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
          </div> */}
        {/* </div>  */}
        {/* Header Content */}
        <div className="header_container" style={{position:"fixed",top:"0px",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div style={{    paddingInline:"81px"}} className="header_content d-flex flex-row align-items-center justify-content-start">
                  <div className="logo_container">
                    <div
                      className="logo_content d-flex flex-row align-items-end justify-content-start"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="logo_img" onClick={refresh}>
                        <Link to="/">
                          <img src="/images/logo.png" width="130px" alt />
                        </Link>
                      </div>

                      {/* <div className="logo_text">learn</div> */}
                    </div>
                  </div>
                  <b>
                      <h5
                        style={{
                          
                          fontWeight: "bold",
                          marginLeft: "35px",
                          textTransform: "uppercase",
                        }}
                      >
                     <Link to={`/course/${props.courseId}`} style={{color:"black"}}>
                        {props.courseTitle}
                    </Link> 
                      </h5>
                  </b>
                  <nav className="main_nav_contaner ml-auto">
                    <ul className="main_nav" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    
                      {/* <i
                        class="fa fa-search"
                        style={{
                          fontSize: "20px",
                          cursor: "pointer",
                          paddingRight: "20px",
                        }}
                      ></i> */}
                      <a className="home_link" onClick={refresh}>
                        <Link to="/historique">
                          <HistoryIcon
                            style={{ fontSize: "22px", color: "black" }}
                          />
                        </Link>
                      </a>
                      <a className="home_link" onClick={refresh}>
                        <Link to="/stat">
                          <BarChartIcon
                            style={{
                              fontSize: "22px",
                              color: "black",
                              marginLeft: "30px",
                            }}
                          />
                        </Link>
                      </a>
                      <a className="home_link" onClick={refresh}>
                        <Link to="/">
                          <PersonIcon
                            style={{
                              fontSize: "22px",
                              color: "black",
                              marginLeft: "30px",
                            }}
                          />
                        </Link>
                      </a>
                      {/* <li className="courses_link" onClick={refresh}>
                        <Link to="/courses"></Link>
                      </li>
                      {/* <li className="courses_link" onClick={refresh}>
                        <Link to="/instructors">instructors</Link>
                      </li> */}
                      {/* <li className="about_link" onClick={refresh}>
                        <Link to="/about"><FontAwesomeIcon icon="fas fa-chart-bar" /></Link>
                      </li>  */}
                    </ul>
                    {/* <div
                      className="search_button"
                      onClick={function () {
                        document
                        .querySelector(".header_search_container")
                        .classList.toggle("active");
                      }}
                      >
                      <i className="fa fa-search" aria-hidden="true" />
                    </div> */}
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
        {/* Header Search Panel */}
        {/* <div className="header_search_container">
          <div className="container">
          <div className="row">
          <div className="col">
                <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
                  <form action="#" className="header_search_form">
                    <input
                      type="search"
                      className="search_input"
                      placeholder="Search"
                      required="required"
                    />
                    <button className="header_search_button d-flex flex-column align-items-center justify-content-center">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </header>
    </div>
  );
};

export default Coursebar;
