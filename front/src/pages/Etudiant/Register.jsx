import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FaUser } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, resetStudent } from "../../features/auth/authSliceStudent";
import Spinner from "../../components/Spinner";
import isEmail from "validator/lib/isEmail";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = () => {
  const [formData, setFormData] = useState({
    Nom: "",
    Prenom: "",
    Email: "",
    mot_de_passe: "",
    Password2: "",
  });

  const { Nom, Prenom, Email, mot_de_passe, Password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    student,
    isErrorStudent,
    isSuccessStudent,
    isLoadingStudent,
    messageStudent,
  } = useSelector((state) => state.authStudent);

  useEffect(() => {
    if (isErrorStudent) {
      toast.error(messageStudent);
    }
    if (isSuccessStudent) {
      toast.success("Student registered succsessfully !");
    }

    dispatch(resetStudent());
  }, [
    student,
    isErrorStudent,
    isSuccessStudent,
    messageStudent,
    navigate,
    dispatch,
  ]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/;
    // check if all field are filled
    if (!Nom || !Email || !Prenom || !mot_de_passe) {
      return toast.error("Please fil in all fields !");
    }
    //  check password match
    if (mot_de_passe !== Password2) {
      return toast.error("passwords do not match");
    }
    //  check if the password is strong using regex
    else if (!passwordRegex.test(mot_de_passe)) {
      return toast.error(`Password must be at least 8 characters long,
                 contain at least one uppercase letter,
                 contain at least one lowercase letter,
                 contain at least a number,
                 contain specials characters !`);
    }
    // check if eamil is valid
    else if (!isEmail(Email)) {
      return toast.error("Email is not valid");
    } else {
      const userData = {
        Nom,
        Prenom,
        Email,
        mot_de_passe,
      };
      dispatch(register(userData));
    }
  };

  if (isLoadingStudent) {
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
        <h2 style={{ margin: 0, color: "black" }}>
          {" "}
          <FaUser /> Register Student
        </h2>
        {/* <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
          create an account
        </p> */}

        <TextField
          label="Name"
          variant="outlined"
          name="Nom"
          value={Nom}
          id="Nom"
          onChange={onChange}
        />

        <TextField
          label="Lastname"
          variant="outlined"
          name="Prenom"
          value={Prenom}
          id="Prenom"
          onChange={onChange}
        />

        <TextField
          label="Email"
          variant="outlined"
          type="text"
          name="Email"
          value={Email}
          id="Email"
          placeholder=""
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

        <TextField
          label="password"
          variant="outlined"
          type="password"
          name="Password2"
          value={Password2}
          id="Password2"
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

export default Register;
