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

function Aboutme({ className }) {
  return (
    <div
      className={`bg-[#ede3d0] rounded-xl py-8 px-8 flex flex-col ${className}`}
    >
      <img
        className="w-20 self-end mb-16"
        src="./images/about_design.png"
      ></img>
      <p className="text-5xl font-semibold">
        Turning ideas into code - welcome to my portfolio!
      </p>
    </div>
  );
}

export default Aboutme;
