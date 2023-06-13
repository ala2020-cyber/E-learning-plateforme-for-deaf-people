import React, { useEffect, useState } from "react";
import Coursebar from "../../components/Coursebar";
import Footer from "../../components/Footer";
import CourseContent from "../../components/CourseContent";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;

  gap: 20px;
  margin-top: 82px;
  padding-inline: 172px;
`;
const Container = styled.div`
  display: flex;

  padding-block: 20px;
`;

const CourseEnrolled = () => {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);
  const [course, setCourse] = useState([]);

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
  }, []);

  return (
    <div>
      <Coursebar courseId={id} courseTitle={course[0]?.Titre} />
      <Wrapper>
        <Container style={{ heigth: "fit-content" }}>
          <CourseContent
            lessons={lessons}
            courseName={course[0]?.Titre}
            coursePoster={course[0]?.imageCoursePath}
          />
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default CourseEnrolled;
