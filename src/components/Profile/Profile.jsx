import React from "react";
import styled from "styled-components";


function Profile({className}) {
  return (
    <div className={className}>
      <img className="rounded-xl h-full w-full" src="./images/portrait.webp " alt="profile"></img>
    </div>
  );
}

export default Profile;
