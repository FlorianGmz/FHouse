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
  padding: 3.5rem 9rem;
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
  /*   display: flex;
  flex-direction: column;
  align-items: flex-end */
  text-align: right;
  padding: 20rem 10rem;
  background-color: ${(props) => (props.navOpen ? "#101010ee" : "white")};
  height: 100vh;
  width: 100vw;
  animation: forwards 1s;
`;

const StyledNavLink = styled(Link)`
  font-size: 5rem;
  transition: transform 0.5s ease-out;
  display: list-item;
  color: white;
  &:hover {
    transform: translateX(-2rem);
  }
`;

const NavLinkCursor = styled.span`
  width: 0;
  height: 1px;
  position: absolute;
  right: -12rem;
  top: 50%;
  background-color: white;
  transition: transform 0.3s ease-out;
  ${StyledNavLink}:hover & {
    width: 9rem;
    transition: ease-out 0.5s;
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
            <StyledNavLink to="/projects">
              Projects
              <NavLinkCursor />
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/projects">
              Process
              <NavLinkCursor />
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/projects">
              About
              <NavLinkCursor />
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/projects">
              Contact
              <NavLinkCursor />
            </StyledNavLink>
          </li>
        </NavList>
      </StyledNav>
    </>
  );
};
