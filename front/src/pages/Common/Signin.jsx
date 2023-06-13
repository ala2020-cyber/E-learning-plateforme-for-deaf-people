import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FaSignInAlt } from "react-icons/fa";

import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  loginStudent,
  resetStudent,
} from "../../features/auth/authSliceStudent";
import {
  loginInstructor,
  resetInstructor,
} from "../../features/auth/authSliceInstructor";

import Spinner from "../../components/Spinner";
import isEmail from "validator/lib/isEmail";

const Signin = () => {
  const [formData, setFormData] = useState({
    Email: "",
    mot_de_passe: "",
  });

  const { Email, mot_de_passe } = formData;
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    instructor,
    isErrorInstructor,
    isSuccessInstructor,
    isLoadingInstructor,
    messageInstructor,
  } = useSelector((state) => state.authInstructor);
  const {
    student,
    isErrorStudent,
    isSuccessStudent,
    isLoadingStudent,
    messageStudent,
  } = useSelector((state) => state.authStudent);

  useEffect(() => {
    if (isErrorInstructor) {
      toast.error(messageInstructor);
    }
    if (isErrorStudent) {
      toast.error(messageStudent);
    }

    if (isSuccessInstructor) {
      toast.success("Loggedin successfully !");
      navigate("/formateur");
    }
    if (isSuccessStudent) {
      toast.success("Loggedin successfully !");
      navigate("/courses");
    }

    dispatch(resetInstructor());
    dispatch(resetStudent());
  }, [
    instructor,
    isErrorInstructor,
    isSuccessInstructor,
    messageInstructor,
    student,
    isErrorStudent,
    isSuccessStudent,
    messageStudent,
    navigate,
    dispatch,
  ]);

  // Onchange
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //  Onsubmit
  const onSubmit = (e) => {
    e.preventDefault();

    // check if all field are filled
    if (!Email || !mot_de_passe || !role) {
      return toast.error("Please fil in all fields !");
    }
    // check if eamil is valid
    else if (!isEmail(Email)) {
      return toast.error("Email is not valid");
    } else {
      const userData = {
        Email,
        mot_de_passe,
      };
      if (role === "Student") {
        dispatch(loginStudent(userData));
      } else {
        dispatch(loginInstructor(userData));
      }
    }
  };

  if (isLoadingInstructor || isLoadingStudent) {
    return <Spinner />;
  }
  return (
    <div>
      <Header />
      <form
        onSubmit={onSubmit}
        style={{
          marginBlock: "200px 100px",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "400px",
          marginInline: "auto",
          textAlign: "center",
          fontSize: "1.1rem",
        }}
      >
        <h1 style={{ margin: 0, color: "black" }}>
          {" "}
          <FaSignInAlt /> Login
        </h1>
        <p style={{ fontWeight: "bold", fontSize: "1.8rem" }}>
          Please login for learning
        </p>

        <select
          name={role}
          id="Level"
          onChange={(e) => setRole(e.target.value)}
          style={{
            color: "#656565",
            height: "56px",
            borderRadius: "5px",
            fontSize: "17px",
            fontWeight: "lighter",
            textShadow: "rgba(0,0,0,.01) 0 0 1px",
            borderColor: "#c4c4c4",
          }}
        >
          <option value="">Select role</option>
          <option value="Instructor">Instructor</option>
          <option value="Student">Student</option>
        </select>

        <TextField
          label="Email"
          variant="outlined"
          type="text"
          name="Email"
          value={Email}
          id="Email"
          onChange={onChange}
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="mot_de_passe"
          value={mot_de_passe}
          id="mot_de_passe"
          onChange={onChange}
        />

        <input
          type="submit"
          value="Submit"
          style={{ background: "black", color: "white" }}
        />
      </form>
      <Footer />
    </div>
  );
};

export default Signin;
