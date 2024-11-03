import React from "react";
import styled from "styled-components";

const Portrait = styled.img`
  border-radius: 8px;
  height: 100%;
  width: 100%;
`;

function Profile() {
  return <Portrait src="./images/portrait.webp " alt="profile"></Portrait>;
}

export default Profile;
