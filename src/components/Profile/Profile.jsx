import React from "react";
import styled from "styled-components";

const Portrait = styled.img`
  border-radius: 8px;
  height: 100%;
  width: 100%;
`;

function Profile() {
  return (
    <div className="">
      <img className="rounded-xl w-1/5" src="./images/portrait.webp " alt="profile"></img>
    </div>
  );
}

export default Profile;
