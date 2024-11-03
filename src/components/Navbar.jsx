import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  background-color: #d8cfbc;
  color: black;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;
  margin:1rem 1rem;
  border-radius: 10px;
`;

const Logo = styled.div`
  font-size: 28px;
  font-family: sans-serif;
  font-weight: 700;
  span {
    font-style: italic;
    font-weight: 100;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 1rem;
`;

const ListItem = styled.li`
  list-style-type: none;
  font-size: 14px;
  text-transform: uppercase;
  font-family: sans-serif;
  color: #333;
`;

function Navbar() {
  return (
    <Nav>
      <Logo>
        <span>Gaurav </span>Gangde
      </Logo>
      <List>
        <ListItem> Projects </ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
      </List>
    </Nav>
  );
}

export default Navbar;
