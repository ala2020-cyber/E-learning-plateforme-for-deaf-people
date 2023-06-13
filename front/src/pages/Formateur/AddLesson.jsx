import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

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
  addLesson,
  deleteCourse,
  deleteLesson,
  resetInstructor,
} from "../../features/auth/authSliceInstructor";

import Spinner from "../../components/Spinner";
import { FaLastfmSquare } from "react-icons/fa";

const AddLesson = () => {
  const [categorie, setCategorie] = useState();
  const [courses, setCourses] = useState([]);
  const [Titre, setTitre] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [Description, setDescription] = useState("");

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [formationId, setFormationId] = useState("");
  const [showProgress, setShowProgress] = useState(false);

  // upload state
  const [UploadedVideo, setUPloadedVideo] = useState({});
  const [messageUpload, setMessageVideo] = useState([]);
  const [isUploaded, setIsUploadedVideo] = useState(false);
  const [uploadPercentage, setuploadPercentagee] = useState(0);

  // transcribe state
  const [messageTranscribe, setMessageTransribed] = useState([]);
  const [transcribedVideo, setTranscribedVideo] = useState({});
  const [isTranscribed, setIsTranscribedVideo] = useState(false);

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
        if (item[0] === categorie) {
          // console.log(item[0], item[1]);
          setFormationId(item[1]);
          resolve(item[1]);
        }
      });
    });
  };

  // upload course video
  const uploadvideoLesson = async () => {
    const formData = new FormData();
    formData.append("video", file);

    await axios
      .post("http://localhost:5000/uploadvideo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const { videoCourseName, videoCoursePath, duration, size } =
          response.data[0];

        setUPloadedVideo({ videoCourseName, videoCoursePath, duration, size });
        setIsUploadedVideo(true);
        console.log(UploadedVideo);
        setMessageVideo(["Video Uploaded successfully", "success"]);
        setTimeout(() => {
          setMessageVideo([]);
        }, 5000);
      })
      .catch((err) => {
        setMessageVideo([err.response.data, "error"]);
        setTimeout(() => {
          setMessageVideo([]);
        }, 5000);
      });
  };

  // transcribe course video
  const transcribevideoLesson = async (videoPath) => {
    if (UploadedVideo) {
      await axios
        .post(
          "http://localhost:5000/transcribe?inputVideoPath=" +
            videoPath +
            "&filename=" +
            UploadedVideo.videoCourseName,
          {
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
          }
        )
        .then((res) => {
          const transcriptionTime = res.data.durationTranscription;
          console.log("transcription data :", res.data);
          setTranscribedVideo(res.data);
          setIsTranscribedVideo(true);
          setShowProgress(false);
          setMessageTransribed([
            "successfully transcribed in " + transcriptionTime + " munite",
            "success",
          ]);

          setTimeout(() => {
            setMessageTransribed([]);
          }, 10000);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("no uploaded video !");
      setMessageTransribed([
        "Please upload video before transcribing !",
        "error",
      ]);
    }
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

    getALlcourses();
    getIdCourse();
  }, [
    instructor,
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
    dispatch(resetInstructor());

    if (!Titre || !Description || !videoTitle) {
      return toast.error("Please fill in all field !");
    } else if (isUploaded === false) {
      return toast.error("Please upload video !");
    } else if (isTranscribed === false) {
      return toast.error("Please transcribe the video!");
    }
    if (UploadedVideo !== {} && transcribedVideo !== {}) {
      console.log(UploadedVideo);

      // Call getIdCourse and wait for it to complete
      const updatedFormationId = await getIdCourse();
      if (updatedFormationId) {
        const lessonData = {
          formation: updatedFormationId,
          LessonTitle: Titre,
          LessonDescription: Description,
          videos: [
            {
              videoTitle: UploadedVideo.videoCourseName,

              customVideoTitle: videoTitle,

              videoPath: UploadedVideo.videoCoursePath,

              transcriptionPath: transcribedVideo.transcriptionPath,

              durationTranscription: transcribedVideo.durationTranscription,

              size: UploadedVideo.size,

              VideoDuration: UploadedVideo.duration,
            },
          ],
        };

        dispatch(addLesson(lessonData)) &&
          addHistorique({
            formateur: instructor.id,
            taskDone: `New lesson has been added ( ${Titre} )`,
            Date: new Date(),
          });
      }

      setUPloadedVideo({});
      setTranscribedVideo({});
      setIsUploadedVideo(false);
      setIsTranscribedVideo(false);
    }
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
            <div className="first_section">
              <legend>Add Lesson</legend>
              <Link to="/editLesson">
                <Button id="addlesson" variant="contained" size="meduim">
                  Lesson <EditIcon style={{ paddingInline: "3px" }} />
                </Button>
              </Link>
            </div>
            <form className="form-espace wrapper" onSubmit={onSubmit}>
              {/* select course to add the lesson to */}
              <select
                name={categorie}
                id="Categorie"
                onChange={(e) => setCategorie(e.target.value)}
              >
                <option>Select Course</option>
                {courses.map((item) => (
                  <option value={item[0]}>{item[0]}</option>
                ))}
              </select>
              <br />
              <TextField
                label="Lesson Title"
                variant="filled"
                name="Titre"
                onChange={(e) => setTitre(e.target.value)}
              />
              <br />

              <textarea
                placeholder="Description"
                name="Description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <br />

              <TextField
                label="Video Title"
                variant="filled"
                name="Titre"
                onChange={(e) => setVideoTitle(e.target.value)}
              />
              <br />

              {/* upload file section */}

              {messageUpload[0] && (
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
                  <Alert severity={messageUpload[1]}>{messageUpload[0]}</Alert>
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
                  onClick={uploadvideoLesson}
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
                      {UploadedVideo.videoCourseName}
                    </h3>

                    <video
                      controls
                      src={UploadedVideo.videoCoursePath}
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

              <div style={{ display: "flex", gap: "20px" }}>
                <Button
                  variant="outlined"
                  size="meduim"

                  disabled={!isUploaded}

                  onClick={() => {
                    transcribevideoLesson(
                      "C:/Users/MSI/Desktop/e-learning platform/front/public" +
                        UploadedVideo.videoCoursePath
                    );
                    setShowProgress(true);
                  }}
                >
                  transcribe video
                </Button>

                {showProgress && (
                  <Stack spacing={2} direction="row">
                    <CircularProgress />
                  </Stack>
                )}
                {isTranscribed && (
                  <Alert severity={messageTranscribe[1]}>
                    {messageTranscribe[0]}
                  </Alert>
                )}
              </div>

              <br />

              <div style={{ margin: "12px" }}>
                <Button type="submit" variant="contained" size="large"
                disabled={
                  statut=== "pending" ? true: false
                }>
                  Submit Lesson
                </Button>
                <Button
                  type="reset"
                  value="reset"
                  style={{ marginLeft: "20px" }}
                  variant="outlined"
                  size="large"
                  onClick={() => {
                    setUPloadedVideo({});
                    setIsUploadedVideo(false);
                    setTranscribedVideo({});
                    setIsTranscribedVideo(false);
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
