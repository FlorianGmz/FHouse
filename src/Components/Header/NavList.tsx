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

const StyledNavList = styled.nav`
  display: ${(props) => (props.navOpen ? "block" : "none")};
`;

const StyledList = styled.ul`
  z-index: 50;
  position: fixed;
  top: 150px;
  left: 0;
  /*   display: flex;
  flex-direction: column;
  align-items: flex-end */
  text-align: right;
  padding: 30rem 10rem;
  height: 100vh;
  width: 100vw;
  animation: 0.5s ${backgroundFadeIn} ease-in-out forwards;
  &.clicked {
    animation: 0.5s ${backgroundFadeOut} ease-in-out forwards;
  }
`;

interface NavListProps {
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavList: React.FC<NavListProps> = ({ navIsOpen, setNavIsOpen }) => {
  return (
    <StyledNavList navOpen={navIsOpen}>
      <StyledList navOpen={navIsOpen} className={navIsOpen ? "clicked" : ""}>
        <ListItem setNavIsOpen={setNavIsOpen} to="/projects">
          Projects
        </ListItem>
        <ListItem setNavIsOpen={setNavIsOpen} to="/process">
          Process
        </ListItem>
        <ListItem setNavIsOpen={setNavIsOpen} to="/about">
          About
        </ListItem>
        <ListItem setNavIsOpen={setNavIsOpen} to="/contact">
          Contact
        </ListItem>
      </StyledList>
    </StyledNavList>
  );
};

export default NavList;
