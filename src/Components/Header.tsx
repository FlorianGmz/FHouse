import { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: ${(props) => (props.navOpen ? "#101010ee" : "transparent")};
  color: ${(props) => (props.navOpen ? "white" : "black")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5rem 5rem;
`;

const NavLogo = styled.div`
  display: flex;
  cursor: pointer;
`;

const HeaderFElement = styled.div``;
const HeaderHElement = styled.div``;

const NavIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  width: 50px;
  height: 15px;
  cursor: pointer;
`;

const Icon = styled.div`
  ${(props?) =>
    props.as === "top" &&
    css`
      background-color: ${(props) => (props.navOpen ? "white" : "black")};
      width: 5rem;
      height: 0.5rem;
      border-radius: 0.5rem;
      transition: ease-in 0.3s;
      ${NavIcon}:hover & {
        width: 3rem;
        transition: ease-out 0.3s;
      }
      &.clicked {
        width: 3rem;
        transform: rotate(45deg) translateX(0rem) translateY(1rem);
        /* transition: ease-out 0.5s; */
      }
    `}
  ${(props?) =>
    props.as === "bottom" &&
    css`
      background-color: ${(props) => (props.navOpen ? "white" : "black")};
      width: 3rem;
      height: 0.5rem;
      border-radius: 0.5rem;
      transition: ease-in 0.3s;
      ${NavIcon}:hover & {
        width: ${(props) => (props.navOpen ? "3rem" : "5rem")};
        transition: ease-out 0.3s;
      }
      &.clicked {
        width: 3rem;
        transform: rotate(-45deg) translateX(-0.25rem) translateY(-1rem);
        transition: ease-out 0.5s;
      }
    `}
`;

const StyledNav = styled.nav`
  display: ${(props) => (props.navOpen ? "block" : "none")};
  animation: 3s ease-out 1s;
`;
const NavList = styled.ul`
  animation: 3s ease-in 1s;
  z-index: 50;
  position: fixed;
  top: 100px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20rem 6rem;
  background-color: ${(props) => (props.navOpen ? "#101010ee" : "white")};
  height: 100vh;
  width: 100vw;
  animation: forwards 1s;
`;

const StyledNavLink = styled(Link)`
  font-size: 5rem;
  transition: transform 0.3s ease-out;
  display: inline-block;
  color: white;
  &:hover {
    transform: translateX(-2rem);
    /* font-size: 10rem; */
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    height: 1px;
    background: white;
    transform: translateY(-50%);
    width: 0;
    top: 50%;
    margin-top: 10px;
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    -webkit-backface-visibility: hidden;
  }
`;

export const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <>
      <StyledHeader navOpen={navIsOpen}>
        <NavLogo>
          <HeaderFElement>
            F<span>A</span>
            <span>R</span>
            <span>O</span>
          </HeaderFElement>
          <HeaderHElement>
            h<span>o</span>
            <span>u</span>
            <span>s</span>
            <span>e</span>
          </HeaderHElement>
        </NavLogo>
        <NavIcon onClick={() => setNavIsOpen((open) => !open)}>
          <Icon
            className={navIsOpen ? "clicked" : ""}
            as="top"
            navOpen={navIsOpen}
          ></Icon>
          <Icon
            className={navIsOpen ? "clicked" : ""}
            as="bottom"
            navOpen={navIsOpen}
          ></Icon>
        </NavIcon>
      </StyledHeader>
      <StyledNav navOpen={navIsOpen}>
        <NavList navOpen={navIsOpen}>
          <li>
            <StyledNavLink to="/projects">Projects</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/projects">Process</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/projects">About</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/projects">Contact</StyledNavLink>
          </li>
        </NavList>
      </StyledNav>
    </>
  );
};
