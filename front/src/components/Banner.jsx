import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BannerWrapper = styled.div`
height:40vh;
// border:1px solid red;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-top:20vh;
background-image:url(https://images.unsplash.com/photo-1631173716529-fd1696a807b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1712&q=80);
background-position:center;
object-fit:cover;
background-size:cover;
background-repeat: no-repeat;
opacity:0.89;
color:black;


`;
const BannerText = styled.span`
font-size:45px;
`;
const Bannercontainer = styled.div``;
const BannerLink = styled.a`
margin-inline:10px;
font-size:1.1rem;
color:black;
text-decoration: none;
`;

const Banner = (props) => {
    const refresh = () => window.location.reload(true);

  return (
    <BannerWrapper>
      <BannerText>{props.title}</BannerText>
      <Bannercontainer>
        <BannerLink onClick={refresh}><Link to={props.link} style={{color:"#ff6600",fontWeight:"bold",fontSize:"20px"}}>{props.firstLink}</Link></BannerLink>/
        <BannerLink>{props.currentLink}</BannerLink>
      </Bannercontainer>
    </BannerWrapper>
  );
};

export default Banner;
