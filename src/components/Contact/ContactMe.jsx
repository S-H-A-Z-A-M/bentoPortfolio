import React from "react";
import styled from "styled-components";
import { GoArrowUpRight } from "react-icons/go";

const ConatctDiv = styled.div`
  background-color: #565449;
  padding: 1.5rem;
  margin: 1rem 1rem;
  border-radius: 10px;
  color: #aaa;
//   width: 450px;
`;

const Contactbar = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rem;
`;

const BarItem = styled.li`
  list-style-type: none;
  //   font-size: 1.5rem;
  width: 50px;
`;

const ContactP = styled.p`
  font-size: 3rem;
  font-weight: bolder;
`;

function ContactMe() {
  return (
    <ConatctDiv>
      <Contactbar>
        <BarItem> Have some question? </BarItem>
        <BarItem>
          <GoArrowUpRight style={{ fontSize: "3rem" }} />
        </BarItem>
      </Contactbar>
      <ContactP>Contact Me</ContactP>
    </ConatctDiv>
  );
}

export default ContactMe;
