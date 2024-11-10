import React from "react";
import styled from "styled-components";
import { GoArrowUpRight } from "react-icons/go";

function ContactMe() {
  return (
    <div className="bg-[#57544A] rounded-lg p-2 mx-1 my-2 text-[#D8CFBC]	">
      <ul className="flex justify-between items-center mb-24">
        <li className="text-wrap w-24 font text-lg font-semibold">
          {" "}
          Have some question?{" "}
        </li>
        <li>
          <GoArrowUpRight style={{ fontSize: "3rem" }} />
        </li>
      </ul>
      <p className="text-5xl font-bold mb-3">Contact Me</p>
    </div>
  );
}

export default ContactMe;
