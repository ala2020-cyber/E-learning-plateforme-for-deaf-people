// import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import NotStartedOutlinedIcon from "@mui/icons-material/NotStartedOutlined";
import SportsScoreOutlinedIcon from "@mui/icons-material/AssistantPhotoOutlined";
import styled from "styled-components";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import NotesIcon from "@mui/icons-material/Notes";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import DeleteIcon from "@mui/icons-material/Delete";

import { saveAs } from "file-saver";
import axios from "axios";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  cursor: pointer;
  &:hover {
    background: #eeeeeecc;
  }
`;

const CourseContent = (props) => {
  const lessons = props.lessons;
  const poster = props.coursePoster;
  const courseName = props.courseName;

  const [showTranscription, setShowTranscription] = useState(false);
  const [showNotes, setShowNotes] = useState(true);

  const [showText, setShowText] = useState(true);
  const [makeSearch, setMakeSearch] = useState(false);
  const [makeDownload, setMakeDownload] = useState(false);
  const [plainTran, setPlainTran] = useState("");

  const [videoSrc, setVideoSrc] = useState("");
  const [Transcription, setTranscription] = useState([]);
  const [currentSegment, setCurrentSegment] = useState("");
  const [currentLessonName, setCurrentLessonName] = useState("");
  const srcExist = videoSrc !== "";

  const videoRef = useRef(null);
  const { id } = useParams();

  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

 
 
 
 
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

      setOpen(false)
  };


  const { student } = useSelector((state) => state.authStudent);


  const getAllNotes = async () => {
    await axios.get("http://localhost:5000/notes").then((res) => {
      const data = res.data;
      const filteredData = data.filter(
        (note) => note.courseID === id && note.studentID === student.id
      );
      setNotes(filteredData);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/notes", {
        studentID: student.id,
        courseID: id,
        note: note,
      })
      .then(() => {
      
        toast.success("Note added successfully");
      });
  };

  function handleTimeClick(time) {
    if (videoRef.current.paused) {
      videoRef.current.play();
    }
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  }

  const fetchTranscripiton = async (path) => {
    try {
      const response = await fetch(path);
      const jsonData = await response.json();
      setTranscription(jsonData);
      setPlainTran(jsonData.text);
    } catch (error) {
      console.error(error);
    }
  };

  const createAndDownloadPdf = () => {
    axios
      .post("http://localhost:5000/createPdf", {
        coursePoster: poster,
        courseName: courseName,
        lessonName: currentLessonName,
        transcription: plainTran,
      })
      .then(() =>
        axios.get("http://localhost:5000/fetchPdf", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(
          pdfBlob,
          "transcription&" + courseName + "&" + currentLessonName + ".pdf"
        );
      });
  };


  const deleteNote= async (id )=> {
    await axios
    .delete("http://localhost:5000/notes/"+id)
    .then(() => {
      toast.success("Note deleted successfully");
    });
  }

  useEffect(() => {
    const firstLesson = lessons[0];
    if (firstLesson) {
      setCurrentLessonName(firstLesson.LessonTitle);
      const firstVideo = firstLesson.videos[0];
      if (firstVideo) {
        fetchTranscripiton(firstVideo.transcriptionPath);
      }
    }

    getAllNotes();

    
  }, [lessons]);

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <div className="lessonsContent">
        <h4>
          Lesson <DoubleArrowOutlinedIcon style={{ fontSize: "16px" }} />{" "}
          <span style={{ fontSize: "16px" }}>{currentLessonName}</span>
        </h4>

        <video
          ref={videoRef}
          width="800px"
          height="450"
          style={{ marginBottom: "10px" }}
          onTimeUpdate={(e) => {
            const currentTime = e.target.currentTime;
            Transcription?.segments &&
              Object.values(Transcription?.segments).map((segment) => {
                if (currentTime > segment.start && currentTime < segment.end) {
                  setCurrentSegment(segment?.text);
                }
              });
          }}
          poster={poster}
          src={srcExist ? videoSrc : lessons[0]?.videos[0]?.videoPath}
          controls
        >
          Your browser does not support the video tag.
        </video>

        {currentSegment && (
          <p
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "1.1rem",
              background: "#98969d57",
              padding: "20px 10px",
              width: "700px",
              margin: "auto",
            }}
          >
            {currentSegment}
          </p>
        )}
        <h3 style={{ padding: "30px 0" }}>
          <BookmarksIcon style={{ fontSize: "18px" }} /> Lessons
        </h3>
        <div className="accordions_tabs">
          {Object.values(lessons).map((lesson) => (
            <Accordion id="accordion" style={{ padding: "10px 0" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{lesson.LessonTitle} </Typography>
              </AccordionSummary>
              {Object.values(lesson.videos).map((video) => (
                <>
                  {/* <h6 style={{paddingLeft: "25px"}}>Description :</h6> */}
                  {/* <p style={{paddingLeft: "25px"}}>{lesson.LessonDescription}</p> */}
                  <AccordionDetails
                    style={{
                      marginLeft: "25px",
                      display: "flex",
                      width: "95%",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h6
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setVideoSrc(video.videoPath);
                        fetchTranscripiton(video.transcriptionPath);
                        setCurrentSegment("");
                        setCurrentLessonName(lesson.LessonTitle);
                      }}
                    >
                      <SlowMotionVideoOutlinedIcon
                        style={{ fontSize: "18px" }}
                      />
                      {video.customVideoTitle}
                    </h6>
                    <p>{video.VideoDuration} Min</p>
                  </AccordionDetails>
                </>
              ))}
            </Accordion>
          ))}
        </div>
      </div>
      <div
        className="transcriptionAndNotesContent"
        style={{
          height: "100vh",
          overflowY: "scroll",
          padding: "0 10px",
          top: "110px",
          position: "sticky",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            width: "357px",
            marginBottom: "35px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <mark
            style={{ borderRadius: "5px", cursor: "pointer" }}
            onClick={() => {
              if (showNotes === false) {
                setShowNotes(true);
                setShowTranscription(false);
              }
            }}
          >
            <NotesIcon /> Notes
          </mark>
          <mark
            style={{ borderRadius: "5px", cursor: "pointer" }}
            onClick={() => {
              if (showTranscription === false) {
                setShowTranscription(true);
                setShowNotes(false);
              }

            }}
          >
            <DescriptionOutlinedIcon />
            Transcription
          </mark>
        </h4>

        {showTranscription && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginBlock: "15px",
            }}
          >
            <Button
              variant="contained"
              href="#outlined-buttons"
              onClick={() => {
                setMakeDownload(true);
                createAndDownloadPdf();
              }}
            >
              <DownloadIcon />
            </Button>

            {makeSearch ? (
              <Button
                variant="outlined"
                href="#outlined-buttons"
                onClick={() => {
                  setShowText(false);
                  setMakeDownload(false);
                  setMakeSearch(true);
                }}
              >
                <SearchIcon />
              </Button>
            ) : (
              <Button
                variant="contained"
                href="#outlined-buttons"
                onClick={() => {
                  setShowText(false);
                  setMakeDownload(false);
                  setMakeSearch(true);
                }}
              >
                <SearchIcon />
              </Button>
            )}

            {makeSearch ? (
              <Button
                variant="contained"
                href="#outlined-buttons"
                onClick={() => {
                  setShowText(true);
                  setMakeDownload(false);
                  setMakeSearch(false);
                }}
              >
                <VisibilityIcon />
              </Button>
            ) : (
              <Button
                variant="outlined"
                href="#outlined-buttons"
                onClick={() => {
                  setShowText(true);
                  setMakeDownload(false);
                  setMakeSearch(false);
                }}
              >
                <VisibilityIcon />
              </Button>
            )}
          </div>
        )}

        {/* show plaintext transcription text */}

        {showText && !showNotes && Transcription && <p>{Transcription.text}</p>}

        {/* make search section */}

        {showTranscription &&
          makeSearch &&
          Transcription?.segments &&
          Object.values(Transcription.segments).map((segment) => (
            <Wrapper
              onClick={() => {
                handleTimeClick(parseInt(segment.start));
              }}
            >
              <div style={{ borderBottom: "1px solid gray" }}>
                <p>{segment.text} </p>
                <div style={{ float: "rigth", textAlign: "right" }}>
                  <span>
                    <NotStartedOutlinedIcon
                      style={{ fontSize: "15px", marginBottom: "2px" }}
                    />
                    {(segment.start / 60).toFixed(2)}
                  </span>{" "}
                  <span>
                    <SportsScoreOutlinedIcon
                      style={{ fontSize: "15px", marginBottom: "2px" }}
                    />
                    {(segment.end / 60).toFixed(2)}
                  </span>
                </div>
              </div>
            </Wrapper>
          ))}

        {/* Show notes section */}
        {showNotes && (
          <>
            <div>
              <center>
              <Button variant="contained" onClick={handleClickOpen} style={{marginBottom:"10px"}}>
                Add Note
              </Button>

              </center>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Add You notes :"}
                </DialogTitle>

                <form onSubmit={handleSubmit}>
                  <DialogContent>
                    <textarea
                    required
                      name="note"
                      id=""
                      cols="60"
                      rows="10"
                      style={{ padding: "10px" }}
                      onChange={(e) => {
                        setNote(e.target.value);
                      }}
                    ></textarea>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button type="submit" onClick={handleClose} autoFocus>
                      Agree
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>

            {notes ? (
              Object.values(notes).map((note) => (
                <>
                  <div
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <p> {note.note}</p>

                    {/* <Button variant="text" style={{padding:"0px"}}>
                      <AutoFixNormalIcon />
                    </Button> */}
                    <Button variant="text"
                    onClick={()=> {
                      deleteNote(note._id)
                    }}
                    >
                      <DeleteIcon  />
                    </Button>
                  </div>
                </>
              ))
            ) : (
              <p style={{ marginBlock: "50px" }}>
                No notes available in the main time
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CourseContent;
