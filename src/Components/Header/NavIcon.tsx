import styled, { css } from "styled-components";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavIconDiv = styled.div`
  top: 60px;
  position: fixed;
  width: 50px;
  margin-top: 16px;
  right: 100px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

const Icon = styled.div<{
  as: string;
  currentPathname: string;
  navOpen: boolean;
}>`
  ${(props?) =>
    props.as === "top" &&
    css`
      background-color: ${
        (props?) =>
          props.currentPathname === "/contact"
            ? "white"
            : props.navOpen
            ? "white"
            : "black"
        /*       props.navOpen && props.currentPathname === "/contact"
          ? "white"
      : "white"} */
      };
      width: 3rem;
      height: 0.2rem;
      border-radius: 0.2rem;
      transition: ease-in 0.3s;
      ${NavIconDiv}:hover & {
        width: ${(props) => (props.navOpen ? "2rem" : "1.5rem")};
        transition: ease-out 0.3s;
      }

      &.clicked {
        width: 2rem;
        transform: translate(0rem, 6px) rotate(45deg);
        transition: ease-out 3s;
      }
    `}
  ${(props?) =>
    props.as === "bottom" &&
    css`
      background-color: ${
        (props) =>
          props.currentPathname === "/contact"
            ? "white"
            : props.navOpen
            ? "white"
            : "black"
        /*       props.navOpen && props.currentPathname === "/contact"
          ? "white"
      : "white"} */
      };
      width: 1.5rem;
      height: 0.2rem;
      border-radius: 0.2rem;
      transition: ease-in 0.3s;
      ${NavIconDiv}:hover & {
        width: ${(props) => (props.navOpen ? "2rem" : "3rem")};
        transition: ease-out 0.3s;
      }
      &.clicked {
        width: 2rem;
        transform: translate(0rem, -6px) rotate(-45deg);
        transition: ease-out 1s;
      }
    `}
`;

interface NavMenuIconProps {
  isOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavIcon: React.FC<NavMenuIconProps> = ({ isOpen, setNavIsOpen }) => {
  const location = useLocation();
  const currentPathname = location.pathname;
  return (
    <>
      <NavIconDiv onClick={() => setNavIsOpen((open) => !open)}>
        <Icon
          className={isOpen ? "clicked" : ""}
          as="top"
          currentPathname={currentPathname}
          navOpen={isOpen}
        ></Icon>
        <Icon
          className={isOpen ? "clicked" : ""}
          as="bottom"
          currentPathname={currentPathname}
          navOpen={isOpen}
        ></Icon>
      </NavIconDiv>
    </>
  );
};

export default NavIcon;
