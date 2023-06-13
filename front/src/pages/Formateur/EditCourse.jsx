import React, { useState, useEffect } from "react";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Footer from "../../components/Footer";
import axios from "axios";
import Header from "../../components/Header";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  deleteCourse,
  deleteLesson,
  updateCourse,
  getCourses,
  resetInstructor,
} from "../../features/auth/authSliceInstructor";

import Spinner from "../../components/Spinner";

const EpaceFormateur = () => {
  const [Titre, setTitre] = useState();
  const [Description, setDescription] = useState();
  const [prerequisFormation, setprerequisFormation] = useState();
  const [Langue, setLangue] = useState();
  const [niveauFormation, setniveauFormation] = useState();
  const [categorie, setCategorie] = useState();

  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectCourses, setSelectCourses] = useState("");

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [UploadedFile, setUPloadedFile] = useState({});
  const [message, setMessage] = useState([]);
  const [uploadPercentage, setuploadPercentagee] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);
  const [formationId, setFormationId] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let {
    instructor,
    isErrorInstructor,
    isSuccessInstructor,
    isLoadingInstructor,
    isUpdatedCourse,
    isCourseDeleted,
    isLessonDeleted,
    messageInstructor,
  } = useSelector((state) => state.authInstructor);

const [statut,setStatut]=useState("")

const getStatut= async()=> {
  await axios 
    .get("http://localhost:5000/instructors/"+instructor?.id)
    .then(res=> { setStatut(res.data.Statut) })
}


  // update a course
  const updatecourse = (idcourse, courseData) => {
    return new Promise((resolve, reject) => {
      axios
        .put("http://localhost:5000/courses/" + idcourse, courseData, {
          headers: {
            Authorization: `Bearer ${instructor.token}`,
          },
        })
        .then((res) => {
          const updatedCourse = res.data;
          console.log(updatedCourse);

          resolve(updatedCourse);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  // get all courses
  const getALlcourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/courses/");

      let cat = [];
      // console.log(response.data);
      for (let index = 0; index < response.data.length; index++) {
        if (response.data[index].formateur === instructor.id) {
          console.log(response.data[index]._id);
          cat.push([response.data[index].Titre, response.data[index]._id, []]);
        }
      }

      try {
        const response = await axios.get("http://localhost:5000/lessons/");
        const lessons = response.data;
        const updatedCourses = cat.map((course) => {
          const courseLessons = lessons
            .filter((lesson) => lesson.formation === course[1])
            .map((lesson) => [lesson.LessonTitle, lesson._id]);
          return [course[0], course[1], courseLessons];
        });
        setCourses(updatedCourses);
        console.log(courses);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get course id

  const getIdCourse = () => {
    return new Promise((resolve) => {
      courses.forEach((item) => {
        if (item[0] === selectCourses) {
          console.log(item[0], item[1]);
          setFormationId(item[1]);
          resolve(item[1]);
        }
      });
    });
  };

  // get all catégories
  const getCategories = async () => {
    // get all catégories to select in add courses

    const response = await axios.get("http://localhost:5000/categories");
    let cat = [];
    for (let index = 0; index < response.data.length; index++) {
      cat.push(response.data[index].libelle);
    }
    setCategories(cat);
  };

  // upload course image
  const uploadCourseImage = async () => {
    const formData = new FormData();
    formData.append("image", file);

    await axios
      .post("http://localhost:5000/uploadimage", formData, {
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

    getStatut()


    if (isErrorInstructor) {
      toast.error(messageInstructor);
    }
    if (isSuccessInstructor) {
      if (isCourseDeleted) {
        toast.success("Course deleted !");
      } else if (isLessonDeleted) {
        toast.success("Lesson deleted !");
      }
    }

    dispatch(resetInstructor());
    getCategories();
    getALlcourses();
  }, [
    instructor,
    isCourseDeleted,
    isLessonDeleted,
    isUpdatedCourse,
    isErrorInstructor,
    isSuccessInstructor,
    messageInstructor,
    navigate,
    dispatch,
  ]);

  const addHistorique = async (data) => {
    await axios
      .post("http://localhost:5000/historique/formateur", data)
      .then((res) => {
        console.log("new task added", res.data);
      })
      .catch((err) => {
        console.log("erreur historique:", err);
      });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let userData = {
      Titre,
      Description,
      formateur: instructor.id,
      categorie,
      imageCoursePath: UploadedFile.imageCoursePath,
      niveauFormation,
      Langue,
      prerequisFormation,
    };

    // Call getIdCourse and wait for it to complete
    const updatedFormationId = await getIdCourse();

    // Use the updated value of formationId from getIdCourse Promise
    if (
      updatecourse(updatedFormationId, userData) &&
      addHistorique({
        formateur: instructor.id,
        taskDone: `Course Has been updated ( ${selectCourses} )`,
        Date: new Date(),
      })
    ) {
      toast.success("Course updated !");
    }
    setUPloadedFile({});
    setIsUploaded(false);
  };

  if (isLoadingInstructor) {
    return <Spinner />;
  }

  return (
    <div>
      <Header
        id={instructor?.id}
        style={{ position: "fixed !important", top: "0px" }}
      />

      <div className="formateur-container">
        <div className="sidebar-formateur wrapper">
          <center className="wrapper">
            <Link to="/formateur">
              <Button id="addlesson" variant="contained" size="meduim">
                <AddIcon style={{ paddingInline: "2px" }} /> course
              </Button>
            </Link>
            <Link to="/addLesson">
              <Button id="addlesson" variant="contained" size="meduim">
                <AddIcon style={{ paddingInline: "2px" }} /> Lesson
              </Button>
            </Link>

            <h3 className="section_title">{courses.length} Courses</h3>
            <section className="courses">
              {courses.map((item) => (
                <Accordion key={item[1]}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Button
                      variant="outlined"
                      size="meduim"
                      style={{ width: "fit-content" }}
                    >
                      {item[0]}
                    </Button>
                    <span style={{ margin: "7px 5px 0 8px" }}>
                      <InsertDriveFileIcon
                        style={{ fontSize: "17px", marginBottom: "6px" }}
                      />{" "}
                      {item[2].length}
                    </span>
                    <button className="delete_btn" variant="text" color="error">
                      <DeleteIcon
                        style={{
                          position: "relative",
                          top: "-7px",
                          width: "50px",
                        }}
                        onClick={() => {
                          addHistorique({
                            formateur: instructor.id,

                            taskDone: `Course Has been deleted (${item[0]})`,
                            Date: new Date(),
                          }) && dispatch(deleteCourse(item[1]));
                        }}
                      />
                    </button>
                  </AccordionSummary>
                  {item[2]
                    ? item[2].map((lesson) => (
                        <AccordionDetails>
                          <div>
                            <Button
                              variant="text"
                              size="small"
                              style={{ width: "fit-content" }}
                            >
                              {lesson[0]}
                            </Button>
                            <button
                              className="delete_btn"
                              variant="text"
                              color="error"
                            >
                              <DeleteIcon
                                style={{
                                  position: "relative",
                                  top: "-7px",
                                  width: "50px",
                                }}
                                onClick={() => {
                                  addHistorique({
                                    formateur: instructor.id,

                                    taskDone: `Lesson Has been deleted (${lesson[0]})`,
                                    Date: new Date(),
                                  }) && dispatch(deleteLesson(lesson[1]));
                                }}
                              />
                            </button>
                          </div>
                        </AccordionDetails>
                      ))
                    : null}
                </Accordion>
              ))}
              {!courses && <p>No course existed yet !</p>}

              <br />
            </section>
          </center>
        </div>

        <div className="formateur-content wrapper">
          <fieldset className="wrapper">
            <legend>
              Edit Course <EditIcon />{" "}
            </legend>
            <form className="form-espace wrapper" onSubmit={onSubmit}>
              <select
                id="selectCourses"
                onChange={(e) => setSelectCourses(e.target.value)}
              >
                <option>Select Course</option>
                {courses.map((item) => (
                  <option value={item[0]}>{item[0]}</option>
                ))}
              </select>
              <br />
              {/* <TextField
                label="Title"
                variant="filled"
                onChange={(e) => setTitre(e.target.value)}
              />
              <br /> */}

              <textarea
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <br />
              <textarea
                placeholder="Prerequis"
                onChange={(e) => setprerequisFormation(e.target.value)}
              ></textarea>
              <br />
              <select id="Language" onChange={(e) => setLangue(e.target.value)}>
                <option>Select language</option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Arabic">Arabic</option>
              </select>
              <br />

              <br />
              <select
                id="Level"
                onChange={(e) => setniveauFormation(e.target.value)}
                style={{ marginTop: " -24px" }}
              >
                <option>Select level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediaire">Intermediaire</option>
                <option value="Advanced">Advanced</option>
              </select>
              <br />

              <select
                id="Categorie"
                onChange={(e) => setCategorie(e.target.value)}
              >
                <option>Select Categorie</option>
                {categories.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>

              {/* upload file section */}

              {message[0] && (
                <Stack
                  sx={{ width: "100%" }}
                  style={{
                    marginBottom: "7px",
                    position: "relative",
                    width: "580px",
                    top: "27px",
                  }}
                  spacing={2}
                >
                  <Alert severity={message[1]}>{message[0]}</Alert>
                </Stack>
              )}

              <Stack
                sx={{ width: "100%" }}
                style={{
                  marginBottom: "7px",
                  position: "relative",
                  width: "580px",
                  top: "27px",
                }}
                spacing={2}
              >
                <Alert severity="info">Image format: jpg, jpeg, png,webp</Alert>
              </Stack>

              <div
                className="container"
                style={{
                  display: "flex",
                  width: "601px",
                  height: "36px",
                  marginTop: "27px",
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
                  onClick={uploadCourseImage}
                  disabled={
                    statut=== "pending" ? true: false
                  }
                >
                  Upload
                </Button>
              </div>

              {isUploaded ? (
                <div>
                  <center>
                    <h3 style={{ fontSize: "16px", marginBlock: " 42px" }}>
                      {UploadedFile.imageCourseName}
                    </h3>
                    <img width="295px" src={UploadedFile.imageCoursePath} />
                  </center>
                </div>
              ) : null}

              <br />
              <div style={{ margin: "12px" }}>
                <Button type="submit" variant="contained" size="large"
                disabled={
                  statut=== "pending" ? true: false
                }
                >
                  Update Course
                </Button>

                <Button
                  type="reset"
                  value="reset"
                  style={{ marginLeft: "20px" }}
                  variant="outlined"
                  size="large"
                  onClick={() => {
                    setUPloadedFile({});
                    setIsUploaded(false);
                  }}
                  disabled={
                    statut=== "pending" ? true: false
                  }
                >
                  Reset
                </Button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EpaceFormateur;
