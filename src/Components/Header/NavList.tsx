import styled, { keyframes } from "styled-components";
import ListItem from "./ListItem.tsx";
import React from "react";

const backgroundFadeIn = keyframes`
  from{
    background-color:#101010ee ;
  }
  to{
    background-color: transparent;
  }
`;

const backgroundFadeOut = keyframes`
  from{
    background-color: transparent ;
  }
  to{
    background-color: #101010ee;
  }
`;

const StyledNavList = styled.nav<{ navOpen: boolean }>`
  display: block;
`;

const StyledList = styled.ul<{ navOpen: boolean }>`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5rem;
  padding: 0rem 100px;
  height: 100vh;
  width: 100vw;
  animation: 0.5s ${backgroundFadeIn} ease-in-out forwards;
  &.clicked {
    animation: 0.5s ${backgroundFadeOut} ease-in-out forwards;
  }
`;

interface NavListProps {
  navIsOpen: boolean;
}

const NavList: React.FC<NavListProps> = ({ navIsOpen }) => {
  return (
    <StyledNavList navOpen={navIsOpen}>
      <StyledList navOpen={navIsOpen} className={navIsOpen ? "clicked" : ""}>
        <ListItem to="/projects">Projects</ListItem>
        <ListItem to="/process">Process</ListItem>
        <ListItem to="/about">About</ListItem>
        <ListItem to="/contact">Contact</ListItem>
      </StyledList>
    </StyledNavList>
  );
};

export default NavList;
