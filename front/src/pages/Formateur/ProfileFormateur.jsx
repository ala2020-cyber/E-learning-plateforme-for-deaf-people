import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

import VerifiedIcon from "@mui/icons-material/Verified";
import PendingIcon from "@mui/icons-material/Pending";

const ProfileFormateur = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});

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

  useEffect(() => {
    console.log(id);
    getUserData();
    console.log(info);
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
            marginBottom: "40px",
            borderBottom: "2px solid gray",
            paddingBottom: "10px",
            fontWeight: "lighter",
            fontSize: "46px",
          }}
        >
          Your Profile
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // alignItems:"center",
            gap: "10px",
          }}
        >
          <section
            className="sidebar"
            style={{
              // border: "1px solid gray",
              padding: "20px",
              width: "fit-content",
              position: "relative",
            }}
          >
            <center>
              {/* <img src={`${info.ImageProfil}`} alt="Image instructor" /> */}
              <img
                width="200px"
                height="200px"
                style={{ borderRadius: "50%", objectFit: "cover" }}
                src={info?.ImageProfil}
                alt=""
              />

              {info?.Statut == "pending" ? (
                <span
                  className="status"
                  style={{
                    position: "absolute",
                    right: "60px",
                  }}
                >
                  <PendingIcon style={{ color: "red", fontSize: "30px" }} />
                </span>
              ) : (
                <span
                  className="status"
                  style={{
                    position: "absolute",
                    right: "60px",
                  }}
                >
                  <VerifiedIcon style={{ color: "green", fontSize: "30px" }} />
                </span>
              )}

              <h4
                className="fullname"
                style={{
                  fontFamily:
                    "-apple-system,BlinkMacSystemFont,Roboto,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
                  fontWeight: "bold",
                  paddingBlock: "8px",
                }}
              >
                {info && info.Prenom && info.Nom
                  ? info.Prenom.charAt(0).toUpperCase() +
                    info.Prenom.slice(1) +
                    " " +
                    info.Nom.charAt(0).toUpperCase() +
                    info.Nom.slice(1)
                  : null}
              </h4>

              { info.Job ? (
                              <h5
                              className="job"
                              style={{
                                fontSize: "14.5px",
                              }}
                            >
                              <em>{info.Job}</em>{" "}
                            </h5>
              ) : (null)}

              {/* <h5 className="email"
            style={{
              fontSize:"14.5px",
            }}
            >{info.Email}</h5> */}
              <div
                className="teacher_social"
                style={{
                  width: "350px",
                  height: "60px",
                  translate: "-18px",
                  scale: "1.2",
                  textAlign: "center",
                }}
              >
                <ul>
                  {info?.linkedinlink ? (
                    <li>
                      <a
                        target="_blank"
                        href={`http://linkedin.com/in/${info?.linkedinlink}`}
                      >
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                  ) : null}

                  {info?.facebooklink ? (
                    <li>
                      <a
                        target="_blank"
                        href={`http://www.facebook.com/${info?.facebooklink}`}
                      >
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                  ) : null}
                  {info?.pinterestlink ? (
                    <li>
                      <a
                        target="_blank"
                        href={`http://pinterest.com/${info?.pinterestlink}`}
                      >
                        <i className="fa fa-pinterest" aria-hidden="true" />
                      </a>
                    </li>
                  ) : null}
                  {info?.twitterlink ? (
                    <li>
                      <a
                        target="_blank"
                        href={`http://twitter.com/${info?.twitterlink}`}
                      >
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                  ) : null}
                </ul>
              </div>
            </center>
          </section>

          <section
            className="profileDetails"
            style={{
              width: "700px",
              padding: "20px",
              // border: "1px solid gray"
            }}
          >
            <h3 style={{ fontWeight: "bold", color: "black" }}>EMAIL</h3>
            <p className="profileDescription">{info.Email}</p>
            {info?.Description ? (
              <>
                  <h3 style={{ fontWeight: "bold", color: "black" }}>DESCRIPTION</h3>
                  <p className="profileDescription">{info.Description}</p>
              </>
            ) : (null) }
        
            {/* les liens sociaux */}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfileFormateur;
