import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  background-color: #ede3d0;
  color: black;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;
  margin: 1rem 1rem;
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

function Navbar({ className }) {
  return (
    <nav
      className={`bg-[#ede3d0] flex justify-between items-center rounded-xl py-8 px-4 uppercase ${className}`}
    >
      <div className="text-3xl font-bold ">
        <span className="font-normal italic">Gaurav </span>Gangde
      </div>
      <ul className="flex gap-20">
        <li> Projects </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
