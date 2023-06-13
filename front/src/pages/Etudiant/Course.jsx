import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";

const CourseDetails = styled.div`
  margin-top: 13vh;
  width: 100%;
  // background-color: #3a5683;
  background-color: #1c1d1f;
  padding: 70px;
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Titre = styled.h1`
  width: 60vw;
  // padding:20px;
  font-size: 2.2rem;
  font-weigth: 700;
  margin-bottom: 0.8rem;
  color: white;
`;
const PetitDescription = styled.h6`
  color: white;
  width: 50vw;
  font-size: 1.2rem;
  font-weigth: 300;
`;

const CreatedBy = styled.h6`
  font-weigth: 200;
  color: gray;
  display: flex;
  gap: 10px;
`;
const NombreParticipants = styled.h6`
  color: white;
  padding-block: 15px;
`;
const DernierMiseAjour = styled.h6`
  color: white;
  padding-block: 15px;
`;
const Langue = styled.h6`
  color: white;
  padding-block: 15px;
`;

const ContainerWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Level = styled.h6`
  color: red;
  // font-size:1.2rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding-block: 20px;
  // margin-left:20px;
  font-size: 1rem;

  display: inline;
  // background-color: red;
  // border-radius: 40px;
`;
const CourseImage = styled.img`
  width: 300px;
`;

const Button = styled.button`
  padding: 15px 30px;
  border: none;
  color: white;
  background-color: red;
  border-radius: 40px;
  font-size: 15px;
  transition: ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`;

const DescriptionContainer = styled.div`
  padding: 30px 70px;
  // margin-bottom:50px;
  width: 80vw;
  // height: 50vh;
`;
const DescriptionTitle = styled.h3`
  font-weigth: bold;
  text-transform: uppercase;
`;

const DescriptionBody = styled.p`
  // margin-block: 40px;
  font-weigth: ligther;
  // margin: 40px;
  // overflow: hidden;
`;

const RequrementList = styled.ul`
  // margin-block: 20px;
  font-weigth: ligther;
`;
const Requirement = styled.li`
  padding-left: 40px;
  font-weigth: ligther;
`;

const Lessons = styled.div`
  // margin-block:20px;
  // border:1px solid black;
`;

const Course = () => {
  const refresh = async () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const { id } = useParams();
  const [lessons, setLessons] = useState([]);
  const [course, setCourse] = useState([]);
  const [pre, setpre] = useState([]);

  const getCourse = async () => {
    await axios("http://localhost:5000/courses")
      .then((res) => {
        setCourse(res.data.filter((course) => course._id === id));
        console.log("course state", course);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
      });
  };

  const getCourseLesson = async () => {
    await axios
      .get("http://localhost:5000/lessons")
      .then((res) => {
        const lessons = res.data;
        const courseLessons = lessons.filter(
          (lesson) => lesson.formation === id
        );
        console.log("courses lesson", courseLessons);
        setLessons(courseLessons);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getCourse();
    getCourseLesson();

    Object.values(course).map((item) => {
      setpre(item.prerequisFormation.split("\n"));
    });
  }, []);
  console.log(course);
  console.log(pre);

  return (
    <div>
      <Header />

      {Object.values(course).map((course) => (
        <>
          <CourseDetails>
            <div>
              <Level>{course.niveauFormation}</Level>
              <Titre style={{ textTransform: "uppercase" }}>
                {course.Titre}
              </Titre>
              <PetitDescription>{course.Description}</PetitDescription>
              <ContainerWrapper>
                <CreatedBy>
                  created by
                  <a>
                    <Link to="/instructor">Dr. ala hani debbabi</Link>
                  </a>
                </CreatedBy>
              </ContainerWrapper>

              <ContainerWrapper>
                <DernierMiseAjour>
                  <i class="fa fa-edit" style={{ marginInline: "5px" }}></i>{" "}
                  {course.updatedAt.slice(0, 10)}
                </DernierMiseAjour>
                <Langue>
                  <i class="fa fa-globe" style={{ marginInline: "5px" }}></i>{" "}
                  {course.Langue}
                </Langue>
                <NombreParticipants>
                  <i class="fa fa-users" style={{ marginInline: "5px" }}></i>{" "}
                  {course.NombreParticipants} participants
                </NombreParticipants>
              </ContainerWrapper>
              <ContainerWrapper>
                <Link to="/enroll" onClick={refresh}>
                  <Link to={`/enroll/${id}`}>
                    <Button>
                      Take Course{" "}
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </Button>
                  </Link>
                </Link>
              </ContainerWrapper>
            </div>
            <CourseImage src={course.imageCoursePath} />
          </CourseDetails>

          <DescriptionContainer>
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionBody>{course.Description}</DescriptionBody>
          </DescriptionContainer>

          <DescriptionContainer>
            <DescriptionTitle>Requirement</DescriptionTitle>
            <RequrementList>
              {course.prerequisFormation.split("\n").map((item) => {
                return <Requirement>{item}</Requirement>;
              })}
            </RequrementList>
          </DescriptionContainer>

          <DescriptionContainer>
            <DescriptionTitle>Course Content</DescriptionTitle>
            <DescriptionBody>{lessons.length} LESSONS</DescriptionBody>
            <Lessons>
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
                          <h6 style={{ cursor: "pointer" }}>
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
            </Lessons>
          </DescriptionContainer>
        </>
      ))}

      <Footer />
    </div>
  );
};

export default Course;
