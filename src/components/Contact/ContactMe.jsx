import React from "react";
import styled from "styled-components";
import { GoArrowUpRight } from "react-icons/go";

function ContactMe({ className }) {
  return (
    <div className={`bg-[#57544A] rounded-lg text-[#D8CFBC]	${className}`}>
      <div className="flex flex-col justify-between p-4 w-full h-full">
        <ul className="flex justify-between items-center">
          <li className="text-wrap w-24 font text-lg font-semibold">
            {" "}
            Have some question?{" "}
          </li>
          <li>
            <GoArrowUpRight style={{ fontSize: "3rem" }} />
          </li>
        </ul>
        <p className="text-5xl font-bold">Contact Me</p>
      </div>
    </div>
  );
}

export default ContactMe;
