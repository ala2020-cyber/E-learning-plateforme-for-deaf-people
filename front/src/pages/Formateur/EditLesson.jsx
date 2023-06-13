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
  resetInstructor,
} from "../../features/auth/authSliceInstructor";

import Spinner from "../../components/Spinner";

const AddLesson = () => {
  const [course, setCourse] = useState();
  const [lesson, setLesson] = useState();
  const [courses, setCourses] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [lessonsSide, setLessonsSide] = useState([]);
  const [changedField, setChangedField] = useState([]);

  const [Titre, setTitre] = useState();
  const [videoTitle, setVideoTitle] = useState();

  const [Description, setDescription] = useState();

  const [file, setFile] = useState();
  const [filename, setFilename] = useState("Choose File");
  const [UploadedFile, setUPloadedFile] = useState({});
  const [message, setMessage] = useState([]);
  const [uploadPercentage, setuploadPercentagee] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);
  const [formationId, setFormationId] = useState("");
  const [lessonId, setLessonId] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    instructor,
    isErrorInstructor,
    isSuccessInstructor,
    isLoadingInstructor,
    isCourseDeleted,
    isLessonDeleted,
    messageInstructor,
  } = useSelector((state) => state.authInstructor);

  const updatelesson = (lessonid, lessondata) => {
    return new Promise((resolve, reject) => {
      axios
        .put("http://localhost:5000/lessons/" + lessonid, lessondata, {
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

  // get all lessons  by select a specific course
  const getAllLessonsBycourseSelected = async () => {
    const courseID = await getIdCourse();
    console.log(courseID);
    await axios
      .get("http://localhost:5000/lessons/")
      .then((res) => {
        res = res.data;
        console.log(res);
        let cat = [];
        for (let index = 0; index < res.length; index++) {
          if (courseID === res[index].formation)
            cat.push([res[index].LessonTitle, res[index]._id]);
        }
        setLessons(cat);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // get all courses
  const getAllcourses = async () => {
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
        if (item[0] === course) {
          console.log(item[0], item[1]);
          setFormationId(item[1]);
          resolve(item[1]);
        }
      });
    });
  };

  // get lesson id

  const getIdLesson = () => {
    return new Promise((resolve) => {
      console.log("lessons", lessons);
      lessons.forEach((item) => {
        if (item[0] === lesson) {
          console.log(item[0], item[1]);
          setLessonId(item[1]);
          resolve(item[1]);
        }
      });
    });
  };

  // upload course video
  const uploadCourseVideos = async () => {
    const formData = new FormData();
    formData.append("video", file);

    await axios
      .post("http://localhost:5000/uploadvideo", formData, {
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
        const { videoCourseName, videoCoursePath, duration, size } =
          response.data[0];

        setUPloadedFile({ videoCourseName, videoCoursePath, duration, size });
        setIsUploaded(true);
        console.log(UploadedFile);
        setMessage(["Video Uploaded successfully", "success"]);
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
  const [statut,setStatut]=useState("")


  const getStatut= async()=> {
    await axios 
      .get("http://localhost:5000/instructors/"+instructor?.id)
      .then(res=> { setStatut(res.data.Statut) })
  }

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
      } else {
        toast.success("New Lesson added !");
      }
    }

    dispatch(resetInstructor());

    getIdCourse();
    getIdLesson();
    getAllLessonsBycourseSelected();
    getAllcourses();
  }, [
    instructor,
    course,
    lesson,
    isCourseDeleted,
    isLessonDeleted,
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

    const lessonData = {};

    if (changedField === "Title") {
      lessonData.LessonTitle = Titre;
    } else if (changedField === "Description") {
      lessonData.LessonDescription = Description;
    } else if (changedField === "VideoTitle") {
      lessonData.videos.customVideoTitle = videoTitle;
    } else if (changedField === "Video") {
      lessonData.videos = [
        {
          videoTitle: UploadedFile.videoCourseName,

          videoPath: UploadedFile.videoCoursePath,

          // transcriptionPath: { type: String},

          size: UploadedFile.size,

          VideoDuration: UploadedFile.duration,
        },
      ];
    }
    if (!course || !lesson) {
      return toast.error("You need to choose course and lesson !");
    }

    console.log("data on submission", lessonData);

    // Call getIdLesson and wait for it to complete
    const updatedLessonId = await getIdLesson();

    // Use the updated value of formationId from getIdCourse Promise
    if (
      updatelesson(updatedLessonId, lessonData) &&
      addHistorique({
        formateur: instructor.id,
        taskDone: `Lesson Has been updated ( ${lesson} ) of course ( ${course} )`,
        Date: new Date(),
      })
    ) {
      toast.success("Lesson updated !");
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
              Edit Lesson <EditIcon />
            </legend>

            <form className="form-espace wrapper" onSubmit={onSubmit}>
              {/* select course to add the lesson to */}

              <select id="course" onChange={(e) => setCourse(e.target.value)}>
                <option>Select Course</option>
                {courses.map((item) => (
                  <option value={item[0]}>{item[0]}</option>
                ))}
              </select>
              {/* select lessons to add the lesson to */}
              <br />

              <select id="lesson" onChange={(e) => setLesson(e.target.value)}>
                <option>Select Lesson</option>
                {lessons.map((item) => (
                  <option value={item[0]}>{item[0]}</option>
                ))}
              </select>

              <br />
              <TextField
                label="Lesson Title"
                variant="filled"
                onChange={(e) => {
                  setTitre(e.target.value);
                  setChangedField("Title");
                }}
              />
              <br />

              <textarea
                placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                  setChangedField("Description");
                }}
              ></textarea>

              <br />
              <TextField
                label="Video Title"
                variant="filled"
                onChange={(e) => {
                  setVideoTitle(e.target.value);
                  setChangedField("VideoTitle");
                }}
              />
              <br />

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
                <Alert severity="info">Video format: mp4, mkv, quicktime</Alert>
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
                    name="Video"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                      setFilename(e.target.files[0].name);
                      setChangedField("Video");
                    }}
                  />
                </div>
                <Button
                  variant="contained"
                  size="small"
                  onClick={uploadCourseVideos}
                  disabled={
                    statut=== "pending" ? true: false
                  }
                >
                  Upload
                </Button>
              </div>

              <div
                className="progress"
                role="progressbar"
                aria-label="Default striped example"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar progress-bar-striped"
                  style={{ width: "10%" }}
                ></div>
              </div>

              {isUploaded && (
                <div>
                  <center>
                    <h3 style={{ fontSize: "16px", marginBlock: " 30px" }}>
                      {UploadedFile.videoCourseName}
                    </h3>

                    <video
                      controls
                      src={UploadedFile.videoCoursePath}
                      width="640"
                      height="360"
                      autoPlay
                      muted
                    >
                      Your browser does not support the video tag.
                    </video>
                  </center>
                </div>
              )}

              <br />
              <Button variant="outlined" size="meduim" disabled>
                transcribe video
              </Button>
              <br />
              <div style={{ margin: "12px" }}>
                <Button type="submit" variant="contained" size="large"
                disabled={
                  statut=== "pending" ? true: false
                }
                >
                  Submit Lesson
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
                    console.log(courses);
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

export default AddLesson;
