import React from 'react'
import Login from '../../service/Login'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useNavigate } from 'react-router'
const Footer = () => {
const [data,setData] = useState({
  })
  
  console.log(data)

  const navigate=useNavigate()

  const onClickHandle = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to log out?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Login.logout(data)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        navigate("/login");
      } else if (result.isDenied) {
        Swal.fire("Cancelled", "", "info");
      }
    });
  };


  return (
    <footer className="footer bg-light">
      <div className="container-fluid d-flex flex-md-row flex-column justify-content-between align-items-md-center gap-1 container-p-x py-3">
        <div>
          <a
            href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/landing/"
            target="_blank"
            className="footer-text fw-bolder"
          >
            DELIVERY BOY
          </a>
          ©
        </div>
        <div>
          <div className="form-check form-control-sm footer-link me-3">
            <button
              type="button"
              className="btn btn-danger m-1"
              onClick={onClickHandle}
            >

              <i className="bx bx-log-out-circle" />   Déconnexion
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer