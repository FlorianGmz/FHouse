import React from "react";
import { useLocation } from "react-router-dom";
import { Icon, NavIconDiv } from "./StyledIconComponents";
interface NavMenuIconProps {
  isOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavIcon: React.FC<NavMenuIconProps> = ({ isOpen, setNavIsOpen }) => {
  const location = useLocation();
  const $currentPathname = location.pathname;
  return (
    <>
      <NavIconDiv onClick={() => setNavIsOpen((open) => !open)}>
        <Icon
          className={isOpen ? "clicked" : ""}
          $position="top"
          $currentPathname={$currentPathname}
          $navOpen={isOpen}
        ></Icon>
        <Icon
          className={isOpen ? "clicked" : ""}
          $position="bottom"
          $currentPathname={$currentPathname}
          $navOpen={isOpen}
        ></Icon>
      </NavIconDiv>
    </>
  );
};

export default NavIcon;
