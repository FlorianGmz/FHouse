import styled, { css } from "styled-components";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 1.5rem;
  gap: 1rem;
  width: 50px;
  height: 15px;
  cursor: pointer;
`;

const Icon = styled.div`
  ${(props?) =>
    props.as === "top" &&
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
      width: 5rem;
      height: 0.5rem;
      border-radius: 0.5rem;
      transition: ease-in 0.3s;
      ${NavIconDiv}:hover & {
        width: 3rem;
        transition: ease-out 0.3s;
      }

      &.clicked {
        width: 3rem;
        transform: rotate(45deg) translate(0rem, 1rem);
        /* transition: ease-out 0.5s; */
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
      width: 3rem;
      height: 0.5rem;
      border-radius: 0.5rem;
      transition: ease-in 0.3s;
      ${NavIconDiv}:hover & {
        width: ${(props) => (props.navOpen ? "3rem" : "5rem")};
        transition: ease-out 0.3s;
      }
      &.clicked {
        width: 3rem;
        transform: rotate(-45deg) translate(-0.25rem, -1rem);
        transition: ease-out 0.5s;
      }
    `}
`;

interface NavMenuIconProps {
  isOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMenuIcon: React.FC<NavMenuIconProps> = ({ isOpen, setNavIsOpen }) => {
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

export default NavMenuIcon;
