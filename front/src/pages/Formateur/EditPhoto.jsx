import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { toast } from "react-toastify";

const EditPhoto = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [UploadedFile, setUPloadedFile] = useState({});
  const [message, setMessage] = useState([]);
  const [uploadPercentage, setuploadPercentagee] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);
  const [formationId, setFormationId] = useState("");

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

    console.log(UploadedFile.imageCoursePath);
    updateData({ ImageProfil: UploadedFile.imageCoursePath });
  };

  // upload Profile image
  const uploadProfileImage = async () => {
    const formData = new FormData();
    formData.append("image", file);

    await axios
      .post("http://localhost:5000/uploadprofile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (ProgressEvent) => {
          setuploadPercentagee(
            parseInt(
              Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
            )
          );
          console.log(uploadPercentage);
          //  clear percentage
          setTimeout(() => {
            setuploadPercentagee(0);
          }, 10000);
        },
      })
      .then((response) => {
        const { imageCourseName, imageCoursePath } = response.data;

        setUPloadedFile({ imageCourseName, imageCoursePath });
        setIsUploaded(true);
        setMessage(["Image Uploaded successfully", "success"]);
        setTimeout(() => {
          setMessage([]);
        }, 5000);
      })
      .catch((err) => {
        setMessage([err.response.data, "error"]);
        setTimeout(() => {
          setMessage([]);
        }, 5000);
      });
  };

  useEffect(() => {
    console.log(id);
    getUserData();
    console.log(info);
  }, []);

  // setUPloadedFile({});
  // setIsUploaded(false);

  return (
    <div>
      <Header id={id} />

      <main
        style={{
          margin: "150px auto 100px auto",
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
        }}
      >
        <h4 style={{ textAlign: "center" }}>Image preview</h4>

        <center>
          {info?.ImageProfil ? (
            <img
              src={info?.ImageProfil}
              alt="hello"
              width="200px"
              height="200px"
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                marginBlock: "20px",
              }}
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="hello"
              width="200px"
              height="200px"
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                marginBlock: "20px",
              }}
            />
          )}
        </center>

        <h4>Add/Modify image</h4>

        <form onSubmit={handleSubmit}>
          {/* upload file section */}

          {message[0] && (
            <Stack
              sx={{ width: "100%" }}
              style={{
                marginBottom: "7px",
                position: "relative",
                width: "580px",
                top: "27px",
                left: "10px",
              }}
              spacing={2}
            >
              <Alert severity={message[1]}>{message[0]}</Alert>
            </Stack>
          )}

          <Stack
            style={{
              marginBottom: "px",
              position: "relative",
              width: "580px",
              top: "27px",
              left: "10px",
            }}
          >
            <Alert severity="info">Image format: jpg, jpeg, png,webp</Alert>
          </Stack>

          <div
            className="container"
            style={{
              display: "flex",
              width: "601px",
              height: "36px",
              marginTop: "35px",
            }}
          >
            <div class="input-group mb-3" style={{ height: "37px" }}>
              <input
                type="file"
                class="form-control"
                id="inputGroupFile02"
                name="image"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  setFilename(e.target.files[0].name);
                }}
              />
            </div>
            <Button
              variant="contained"
              size="small"
              onClick={uploadProfileImage}
            >
              Upload
            </Button>
          </div>
          <center>
            <Button
              type="submit"
              variant="contained"
              style={{ marginBlock: "20px" }}
            >
              Validate
            </Button>
          </center>

          <br />
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default EditPhoto;
