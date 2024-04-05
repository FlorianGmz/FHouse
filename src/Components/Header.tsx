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

const logoFadeIn = keyframes`
  from {
    color: transparent;
  }
  to {
    color: white;
  }
`;

const letterFadeIn = keyframes`
  from {
    opacity: 0;
    color:transparent;
  }
  to {
    visibility: visible ;
    opacity: 1;
    color:white;
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
  &.clicked {
    animation: 0.5s ${backgroundFadeIn} ease-in-out forwards;
  }
`;

const NavLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  cursor: pointer;
`;

const StyledFLogo = styled.div`
  font-size: 4rem;
  letter-spacing: 0.3rem;
  color: black;
  transition: 1.5s;
  width: 2rem;
  &.clicked {
    width: 13rem;
    color: white;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    animation: 1s ${logoFadeIn} ease-out;
  }
`;

const StyledHLogo = styled.div`
  font-size: 4rem;
  letter-spacing: 0.3rem;
  color: black;
  // transition: 1.5s;
  // transition: ease-in-out 0.5s;
  &.clicked {
    color: white;
    animation: 1s ${logoFadeIn} ease-out;
  }
`;

const StyledLogoLetter = styled.span`
  text-decoration: none;
  color: transparent;
  font-size: 4rem;
  visibility: hidden;
  transition: 4s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  &.clicked {
    ${(props?) =>
      props.as === "A" &&
      css`
        animation: 0.5s linear 1s normal ${letterFadeIn} forwards;
      `}
    ${(props?) =>
      props.as === "R" &&
      css`
        animation: 0.5s linear 1.25s ${letterFadeIn} forwards;
      `}
    ${(props?) =>
      props.as === "O" &&
      css`
        animation: 0.5s linear 1.5s ${letterFadeIn} forwards;
      `}
    ${(props?) =>
      props.as === "o" &&
      css`
        animation: 0.5s linear 1s ${letterFadeIn} forwards;
      `}
    ${(props?) =>
      props.as === "u" &&
      css`
        animation: 0.5s linear 1s ${letterFadeIn} forwards;
      `}
    ${(props?) =>
      props.as === "s" &&
      css`
        animation: 0.5s linear 1s ${letterFadeIn} forwards;
      `}
    ${(props?) =>
      props.as === "e" &&
      css`
        animation: 0.5s linear 1s ${letterFadeIn} forwards;
      `}
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
  top: 150px;
  left: 0;
  /*   display: flex;
  flex-direction: column;
  align-items: flex-end */
  text-align: right;
  padding: 30rem 10rem;
  height: 100vh;
  width: 100vw;
  animation: forwards 1s;
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
        <NavLogo>
          <StyledFLogo className={navIsOpen ? "clicked" : ""}>
            F
            <StyledLogoLetter as="A" className={navIsOpen ? "clicked" : ""}>
              A
            </StyledLogoLetter>
            <StyledLogoLetter as="R" className={navIsOpen ? "clicked" : ""}>
              R
            </StyledLogoLetter>
            <StyledLogoLetter as="O" className={navIsOpen ? "clicked" : ""}>
              O
            </StyledLogoLetter>
          </StyledFLogo>
          <StyledHLogo className={navIsOpen ? "clicked" : ""}>
            h
            <StyledLogoLetter as="o" className={navIsOpen ? "clicked" : ""}>
              o
            </StyledLogoLetter>
            <StyledLogoLetter as="u" className={navIsOpen ? "clicked" : ""}>
              u
            </StyledLogoLetter>
            <StyledLogoLetter as="s" className={navIsOpen ? "clicked" : ""}>
              s
            </StyledLogoLetter>
            <StyledLogoLetter as="e" className={navIsOpen ? "clicked" : ""}>
              e
            </StyledLogoLetter>
          </StyledHLogo>
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
