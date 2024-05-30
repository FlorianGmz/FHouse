import ListItem from "../ListItem/ListItem.tsx";
import React from "react";
import { StyledList, StyledNavList } from "./StyledListComponents.ts";

interface NavListProps {
  navIsOpen: boolean;
}

const NavList: React.FC<NavListProps> = ({ navIsOpen }) => {
  return (
    <StyledNavList $navOpen={navIsOpen}>
      <StyledList $navOpen={navIsOpen} className={navIsOpen ? "clicked" : ""}>
        <ListItem to="/projects">Projects</ListItem>
        <ListItem to="/process">Process</ListItem>
        <ListItem to="/about">About</ListItem>
        <ListItem to="/contact">Contact</ListItem>
      </StyledList>
    </StyledNavList>
  );
};

export default NavList;
