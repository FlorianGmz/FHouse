import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const logoFadeIn = keyframes`
  from {
    color: transparent;
  }
  to {
    color: white;
  }
`;

const logoFadeOut = keyframes`
  from {
    color: white;
  }
  to {
    color: transparent;
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

const StyledLink = styled(Link)`
  position: fixed;
  top: 47.5px;
  font-size: 50px;
  font-weight: 500;
  line-height: 50px;
  left: 100px;
  z-index: 10;
  @media only screen and (max-width: 770px) {
    left: 50px;
  }
`;
const Logo = styled.div<{ $scrolled: boolean }>`
  color: ${({ $scrolled }) => ($scrolled ? "transparent" : "black")};
  font-size: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  cursor: pointer;
  @media only screen and (max-width: 770px) {
    font-size: 2.5rem;
  }
  &.contact-page {
    color: ${({ $scrolled }) => ($scrolled ? "transparent" : "white")};
  }
  @media only screen and (max-width: 770px) {
  }
`;
const StyledFLogo = styled.div`
  $letter-spacing: 0.1rem;
  transition: 1s;
  width: 1.5rem;
  @media only screen and (max-width: 770px) {
    width: 1.3rem;
  }
  /* animation: 1s ${logoFadeOut} ease-out; */
  &.clicked {
    width: 8.3rem;
    color: white;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    animation: 1s ${logoFadeIn} ease-out;
    @media only screen and (max-width: 770px) {
      width: 7rem;
    }
  }
`;

const StyledHLogo = styled.div`
  $letter-spacing: 0.1rem;
  transition: 1s;
  /* animation: 1s ${logoFadeOut} ease-out; */
  &.clicked {
    color: white;
    animation: 1s ${logoFadeIn} ease-out;
    @media only screen and (max-width: 770px) {
      $letter-spacing: 0rem;
    }
  }
`;

const animationTimings = {
  A: 1,
  R: 1.5,
  O: 2,
  o: 2.5,
  u: 2.75,
  s: 3,
  e: 3.25,
};

const StyledLogoLetter = styled.span<{ $letter: string }>`
  text-decoration: none;
  color: transparent;
  font-size: 3rem;
  visibility: hidden;
  transition: 4s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  animation: 0.5s linear forwards;
  @media only screen and (max-width: 770px) {
    font-size: 2.5rem;
  }
  &.clicked {
    animation: 0.5s linear forwards;
    animation-delay: ${({ $letter }) =>
      `${animationTimings[$letter as keyof typeof animationTimings]}s`};
    animation-name: ${({ $letter }) => ($letter ? letterFadeIn : "none")};
  }
`;

interface NavLogoProps {
  navIsOpen: boolean;
}

const NavLogo: React.FC<NavLogoProps> = ({ navIsOpen }) => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const [$scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledLink reloadDocument to={"/"}>
      <Logo
        $scrolled={$scrolled}
        className={isContactPage ? "contact-page" : ""}
      >
        <StyledFLogo className={navIsOpen ? "clicked" : ""}>
          F
          <StyledLogoLetter $letter="A" className={navIsOpen ? "clicked" : ""}>
            A
          </StyledLogoLetter>
          <StyledLogoLetter $letter="R" className={navIsOpen ? "clicked" : ""}>
            R
          </StyledLogoLetter>
          <StyledLogoLetter $letter="O" className={navIsOpen ? "clicked" : ""}>
            O
          </StyledLogoLetter>
        </StyledFLogo>
        <StyledHLogo className={navIsOpen ? "clicked" : ""}>
          h
          <StyledLogoLetter $letter="o" className={navIsOpen ? "clicked" : ""}>
            o
          </StyledLogoLetter>
          <StyledLogoLetter $letter="u" className={navIsOpen ? "clicked" : ""}>
            u
          </StyledLogoLetter>
          <StyledLogoLetter $letter="s" className={navIsOpen ? "clicked" : ""}>
            s
          </StyledLogoLetter>
          <StyledLogoLetter $letter="e" className={navIsOpen ? "clicked" : ""}>
            e
          </StyledLogoLetter>
        </StyledHLogo>
      </Logo>
    </StyledLink>
  );
};

export default NavLogo;
