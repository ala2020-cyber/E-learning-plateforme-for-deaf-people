import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

const EditProfileFormateur = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  const [formData, setFormData] = useState(null);

  const [changedField, setChangedField] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getUserData = async () => {
    await axios
      .get(`http://localhost:5000/instructors/${id}`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateData = async (Data) => {
    await axios
      .put(`http://localhost:5000/instructors/${id}`, Data)
      .then((res) => {
        console.log(res.data);
        toast.success("updated Successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Update Failed");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form data", formData);

    updateData(formData);
  };

  useEffect(() => {
    getUserData();

    if (info.Nom) {
      setFormData({
        Nom: info?.Nom ? info.Nom : formData.Nom,
        Prenom: info?.Prenom ? info.Prenom : formData.Prenom,
        Description: info?.Description
          ? info.Description
          : formData.Description,
        Job: info?.Job ? info.Job : formData.Job,

        twitterlink: info?.LiensSociaux?.twitterlink
          ? info?.LiensSociaux?.twitterlin
          : formData.twitterlink,
        facebooklink: info?.LiensSociaux?.facebooklink
          ? info?.LiensSociaux?.facebooklink
          : formData.facebooklink,
        pinterestlink: info?.LiensSociaux?.pinterestlink
          ? info?.LiensSociaux?.pinterestlink
          : formData.pinterestlink,
        linkedinlink: info?.LiensSociaux?.linkedinlink
          ? info?.LiensSociaux?.linkedinlink
          : formData.linkedinlink,
      });
    }
  }, []);

  return (
    <div>
      <Header id={id} />

      <main
        style={{
          margin: "150px auto 100px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "15px",
            fontWeight: "lighter",
            fontSize: "67px",
          }}
        >
          Edit Profile
        </h1>
        <p style={{ fontSize: "20px" }}>Add information about yourself</p>

        <br />

        <Button
          variant="contained"
          size="meduim"
          style={{
            position: "absolute",
            right: "150px",
            top: "-5px",
          }}
        >
          <Link to={`/profile/editPhoto/${id}`} style={{ color: "white" }}>
            Modify Image
          </Link>
        </Button>

        <form onSubmit={handleSubmit}>
          <h4
            style={{
              borderBottom: "1px solid black",
              width: "fit-content",
            }}
          >
            Basic information :
          </h4>
          <br />
          {info.Nom ? (
            <>
              <TextField
                id="standard-basic"
                label="E-mail"
                InputLabelProps={{ style: { fontSize: 17 } }} // font size of input label
                variant="standard"
                defaultValue={info?.Email}
                style={{ width: "500px" }}
                disabled
              />
              <br />
              <br />
              <TextField
                id="standard-basic"
                label="Name"
                name="Nom"
                onChange={handleInputChange}
                variant="standard"
                defaultValue={info?.Nom}
                InputLabelProps={{ style: { fontSize: 17 } }} // font size of input label
                style={{ width: "500px" }}
              />
              <br />
              <br />
              <TextField
                id="standard-basic"
                label="LastName"
                name="Prenom"
                onChange={handleInputChange}
                variant="standard"
                InputLabelProps={{ style: { fontSize: 17 } }} // font size of input label
                defaultValue={info?.Prenom}
                style={{ width: "500px" }}
              />
              <br />

              <br />
              <TextField
                id="standard-basic"
                name="Description"
                label="Description"
                onChange={handleInputChange}
                InputLabelProps={{ style: { fontSize: 17 } }} // font size of input label
                defaultValue={info?.Description}
                variant="standard"
                style={{ width: "500px" }}
              />
              <br />
              <br />
              <TextField
                id="standard-basic"
                label="Occupation"
                name="Job"
                onChange={handleInputChange}
                InputLabelProps={{ style: { fontSize: 17 } }} // font size of input label
                helperText='Add a professional title such as "OpenEars Trainer" or "Developer".'
                variant="standard"
                defaultValue={info?.Job}
                style={{ width: "500px" }}
                inputProps={{ style: {} }}
              />
              <br />
              <br />
              <br />
              <h4
                style={{
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
              >
                Links:{" "}
              </h4>
              <br />

              <div style={{ marginBottom: "20px" }}>
                <span
                  className="head"
                  style={{
                    border: "1px solid black",
                    borderRight: "none",
                    backgroundColor: "#f7f9fa",
                    padding: "12px 32px",
                  }}
                >
                  http://twitter.com/
                </span>
                <input
                  style={{
                    height: "47px",
                    width: "300px",
                    paddingInline: "20px",
                  }}
                  name="twitterlink"
                  onChange={handleInputChange}
                  type="text"
                  Value={info?.twitterlink}
                  placeholder={"Profil Twitter"}
                />
              </div>

              <div style={{ marginBlock: "20px" }}>
                <span
                  className="head"
                  style={{
                    border: "1px solid black",
                    borderRight: "none",
                    backgroundColor: "#f7f9fa",
                    padding: "12px 32px",
                  }}
                >
                  http://www.facebook.com/
                </span>
                <input
                  style={{
                    height: "48px",
                    width: "300px",
                    paddingInline: "20px",
                  }}
                  name="facebooklink"
                  onChange={handleInputChange}
                  type="text"
                  className="body"
                  Value={info?.facebooklink}
                  placeholder={"Profil Facebook"}
                />
              </div>

              <div style={{ marginBlock: "20px" }}>
                <span
                  className="head"
                  style={{
                    border: "1px solid black",
                    borderRight: "none",
                    backgroundColor: "#f7f9fa",
                    padding: "12px 32px",
                  }}
                >
                  http://pinterest.com/
                </span>
                <input
                  style={{
                    height: "48px",
                    width: "300px",
                    paddingInline: "20px",
                  }}
                  type="text"
                  name="pinterestlink"
                  onChange={handleInputChange}
                  className="body"
                  Value={info?.pinterestlink}
                  placeholder={"Profil Pinterest"}
                />
              </div>

              <div style={{ marginBlock: "20px" }}>
                <span
                  className="head"
                  style={{
                    border: "1px solid black",
                    borderRight: "none",
                    backgroundColor: "#f7f9fa",
                    padding: "12px 32px",
                  }}
                >
                  http://linkedin.com/in/
                </span>
                <input
                  style={{
                    height: "48px",
                    width: "300px",
                    paddingInline: "20px",
                  }}
                  type="text"
                  name="linkedinlink"
                  onChange={handleInputChange}
                  className="body"
                  Value={info?.linkedinlink}
                  placeholder={"Profil LinkedIn"}
                />
              </div>

              <br />
            </>
          ) : null}

          <center>
            <Button type="submit" size="large" variant="contained">
              Submit
            </Button>
          </center>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default EditProfileFormateur;
