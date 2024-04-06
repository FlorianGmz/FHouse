import { useState } from "react";
import styled, { css } from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./NavLogo";

const backgroundFadeIn = keyframes`
  from{
    background-color: transparent;
  }
  to{
    background-color:#101010ee ;
  }
`;

const backgroundFadeOut = keyframes`
  from{
    background-color: #101010ee;
  }
  to{
    background-color: transparent ;
  }
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9rem;
  animation: 0.5s ${backgroundFadeOut} ease-in-out forwards;
  &.clicked {
    animation: 0.5s ${backgroundFadeIn} ease-in-out forwards;
  }
`;

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
        transform: rotate(45deg) translate(0rem, 1rem);
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
        transform: rotate(-45deg) translate(-0.25rem, -1rem);
        transition: ease-out 0.5s;
      }
    `}
`;

const StyledNav = styled.nav`
  display: ${(props) => (props.navOpen ? "block" : "none")};
`;
const NavList = styled.ul`
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
  animation: 0.5s ${backgroundFadeOut} ease-in-out forwards;
  &.clicked {
    animation: 0.5s ${backgroundFadeIn} ease-in-out forwards;
  }
`;

const StyledNavLink = styled(Link)`
  font-size: 6.5rem;
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
      <StyledHeader className={navIsOpen ? "clicked" : ""}>
        <Logo navIsOpen={navIsOpen} />
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
        <NavList navOpen={navIsOpen} className={navIsOpen ? "clicked" : ""}>
          <li>
            <StyledNavLink as="projects" to="/projects">
              Projects
              <NavLinkCursor />
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink as="process" to="/process">
              Process
              <NavLinkCursor />
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink as="about" to="/about">
              About
              <NavLinkCursor />
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink as="contact" to="/contact">
              Contact
              <NavLinkCursor />
            </StyledNavLink>
          </li>
        </NavList>
      </StyledNav>
    </>
  );
};
