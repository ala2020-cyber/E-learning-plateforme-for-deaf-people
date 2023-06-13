import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

const Wrapper = styled.div`
  margin: 90px;
  display: flex;
  // align-items: center;
  // justify-content: center;
  gap: 50px;
  // border: 1px solid red;
`;
const Button = styled.button`
  width: 350px;
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

const InstructorContent = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  gap: 10px;
  width: auto;
  margin: 20px;
  width: 767px;
`;

const FormateurName = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
`;
const TitrePro = styled.h5`
  // font-size:1.2rem;
`;
const TitreDescription = styled.h4`
  color: gray;
  text-transform: uppercase;
`;
const Description = styled.p``;
const ImageProfil = styled.img`
  width: 350px;
  heigth: 350px;
  border-radius: 16px;
`;
const SocialMediaLink = styled.ul`
  width: 350px;
  height: 60px;
  text-align: center;
`;
const SocialLink = styled.li`
  padding-block: 10px;
`;

const Instructor = () => {
  return (
    <div>
      <Header />
      <Banner
        title="Instructor Details"
        link="/instructors"
        firstLink="Instructors"
        currentLink="Instructor"
      />
      <Wrapper>
        <InstructorContent>
          <TitreDescription>Instructor</TitreDescription>
          <FormateurName>Jonathan Smith</FormateurName>
          <TitrePro>Developer and Lead Instructor</TitrePro>
          <InstructorContent>
            <TitreDescription>Informations personnelles</TitreDescription>
            <Description>
              I'm Jonathan, I'm a developer with a passion for teaching. I'm the
              lead instructor at the London App Brewery, London's leading
              Programming Bootcamp. I've helped hundreds of thousands of
              students learn to code and change their lives by becoming a
              developer. I've been invited by companies such as Twitter,
              Facebook and Google to teach their employees. My first foray into
              programming was when I was just 12 years old, wanting to build my
              own Space Invader game. Since then, I've made hundred of websites,
              apps and games. But most importantly, I realised that my greatest
              passion is teaching. I spend most of my time researching how to
              make learning to code fun and make hard concepts easy to
              understand. I apply everything I discover into my bootcamp
              courses. In my courses, you'll find lots of geeky humour but also
              lots of explanations and animations to make sure everything is
              easy to understand. I'll be there for you every step of the way.
            </Description>
          </InstructorContent>
        </InstructorContent>
        <InstructorContent>
          <ImageProfil src="images/teacher_1.jpg" />
          <SocialMediaLink>
            <div className="teacher_social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </SocialMediaLink>
          <Button>
            See all Courses <i class="fa fa-angle-right" aria-hidden="true"></i>
          </Button>
        </InstructorContent>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Instructor;
