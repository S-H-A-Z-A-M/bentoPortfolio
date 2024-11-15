import React from "react";
import styled from "styled-components";

function Socials({ className }) {
  return (
    <div
      className={`bg-[#ede3d0] rounded-xl py-4 px-4 uppercase ${className} items-center `}
    >
      <ul className="flex justify-around">
        <li> Github </li>
        <li>Linkedin</li>
        <li>Instagram</li>
      </ul>
    </div>
  );
}

export default Socials;
