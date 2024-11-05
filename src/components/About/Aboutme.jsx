import React from "react";
import styled from "styled-components";

const AboutDiv = styled.div`
  background-color: #d8cfbc;
  // width: 600px;
  text-align: end;
  padding: 1rem;
  padding-bottom: 0;
  margin: 1rem 1rem;
  border-radius: 10px;
`;

const Aimage = styled.img`
  width: 120px;
`;

const Intro = styled.div`
  font-family: sans-serif;
  font-size: 3.5rem;
  font-weight: bolder;
  text-align: left;
  padding: 1rem 3.5rem 1rem 0.5rem;
`;

function Aboutme() {
  return (
    <AboutDiv>
      <Aimage src="./images/about_design.png"></Aimage>
      <Intro>Turning ideas into code – welcome to my portfolio!</Intro>;
    </AboutDiv>
  );
}

export default Aboutme;
