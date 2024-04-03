import { useState } from "react";
import styled, { css } from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const backgroundFadeIn = keyframes`
  from{
    background-color: transparent;
    color:black;
  }
  to{
    background-color:#101010ee ;
    color: white;
  }
`;

const letterFadeIn = keyframes`
  from {
    color: transparent;
  }
  to {
    color: white;
  }
`;

const StyledHeader = styled.header`
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
  &.clicked {
    animation: 1s ${backgroundFadeIn} ease-in-out forwards;
  }
`;

const NavLogo = styled.div`
  display: flex;
  cursor: pointer;
`;

const HeaderFElement = styled.div`
  color: black;
  &.clicked {
    animation: 1s ${letterFadeIn} ease-in-out forwards;
  }
`;

const HeaderHElement = styled.div`
  &.clicked {
    animation: 1s ${letterFadeIn} ease-in-out forwards;
  }
`;

const StyledLogoLetter = styled.span`
  display: none;
  transition: ease-in 1s;

  &.clicked {
    animation: 1s ${letterFadeIn} ease-in-out forwards;
    display: inline-block;
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
  height: 100vh;
  width: 100vw;
  animation: forwards 1s;
  &.clicked {
    animation: 1s ${backgroundFadeIn} ease-in-out forwards;
  }
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
      <StyledHeader className={navIsOpen ? "clicked" : ""}>
        <NavLogo>
          <HeaderFElement className={navIsOpen ? "clicked" : ""}>
            F
            <StyledLogoLetter className={navIsOpen ? "clicked" : ""}>
              A
            </StyledLogoLetter>
            <StyledLogoLetter className={navIsOpen ? "clicked" : ""}>
              R
            </StyledLogoLetter>
            <StyledLogoLetter className={navIsOpen ? "clicked" : ""}>
              O
            </StyledLogoLetter>
          </HeaderFElement>
          <HeaderHElement className={navIsOpen ? "clicked" : ""}>
            h
            <StyledLogoLetter className={navIsOpen ? "clicked" : ""}>
              o
            </StyledLogoLetter>
            <StyledLogoLetter className={navIsOpen ? "clicked" : ""}>
              u
            </StyledLogoLetter>
            <StyledLogoLetter className={navIsOpen ? "clicked" : ""}>
              s
            </StyledLogoLetter>
            <StyledLogoLetter className={navIsOpen ? "clicked" : ""}>
              e
            </StyledLogoLetter>
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
        <NavList navOpen={navIsOpen} className={navIsOpen ? "clicked" : ""}>
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
