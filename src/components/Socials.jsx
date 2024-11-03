import React from "react";
import styled from "styled-components";

const SocialDev = styled.div`
  background-color: #d8cfbc;
  padding: 1.5rem 5%;
  margin: 1rem 1rem;
  border-radius: 10px;
  width: 550px;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const ListItem = styled.li`
  list-style-type: none;
  font-size: 18px;
  text-transform: uppercase;
  font-family: sans-serif;
  color: #000;
`;

function Socials() {
  return (
    <SocialDev>
      <List>
        <ListItem> Github </ListItem>
        <ListItem>Linkedin</ListItem>
        <ListItem>Instagram</ListItem>
      </List>
    </SocialDev>
  );
}

export default Socials;
