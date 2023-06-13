import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();

  const getUserData = async () => {
    const firstResponse = "";
    await axios.get(`http://localhost:5000/instructors/${id}`).then((res) => {
      res.data.Email !== null
        ? console.log(res?.data?.Email)
        : console.log("this is student !");
    });
  };

  useEffect(() => {
    console.log(id);
    getUserData();
  }, []);
  return (
    <div>
      <Header id={id} />

      <Footer />
    </div>
  );
};

export default Profile;
