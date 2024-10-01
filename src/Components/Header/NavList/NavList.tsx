import React from "react";
import { StyledList, StyledNavList } from "./StyledListComponents.ts";
import PageLink from "../PageLink/PageLink.tsx";

interface NavListProps {
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const pages = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/process", label: "Process" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const NavList: React.FC<NavListProps> = ({ navIsOpen, setNavIsOpen }) => {
  return (
    <StyledNavList $navOpen={navIsOpen}>
      <StyledList $navOpen={navIsOpen} className={navIsOpen ? "clicked" : ""}>
        {pages.map((page) => (
          <PageLink
            to={page.path}
            onClick={() => setNavIsOpen((open) => !open)}
          >
            {page.label}
          </PageLink>
        ))}
      </StyledList>
    </StyledNavList>
  );
};

export default NavList;
