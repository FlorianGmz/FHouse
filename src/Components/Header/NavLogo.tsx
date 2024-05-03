import { useEffect, useState } from "react";
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

const letterFadeOut = keyframes`
  from {
    opacity: 1;
    color:white;
    visibility: visible;
  }
  to {
    opacity: 0;
    color:transparent;
  }
  `;
const Logo = styled.div`
  color: ${({ scrolled }) => (scrolled ? "transparent" : "black")};
  font-size: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  cursor: pointer;
  &.contact-page {
    color: white;
  }
`;
const StyledFLogo = styled.div`
  letter-spacing: 0.2rem;
  font-weight: 500;
  transition: 1s;
  width: 1.5rem;
  /* animation: 1s ${logoFadeOut} ease-out; */
  &.clicked {
    width: 7.5rem;
    color: white;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    animation: 1s ${logoFadeIn} ease-out;
  }
`;

const StyledHLogo = styled.div`
  letter-spacing: 0.1rem;
  transition: 1s;
  /* animation: 1s ${logoFadeOut} ease-out; */
  &.clicked {
    color: white;
    animation: 1s ${logoFadeIn} ease-out;
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

const StyledLogoLetter = styled.span`
  text-decoration: none;
  color: transparent;
  font-size: 3rem;
  visibility: hidden;
  transition: 4s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  animation: 0.5s linear forwards;

  &.clicked {
    animation: 0.5s linear forwards;
    animation-delay: ${({ as }) => `${animationTimings[as]}s`};
    animation-name: ${({ as }) => (as ? letterFadeIn : "none")};
  }
`;

const NavLogo = ({ navIsOpen }) => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const [scrolled, setScrolled] = useState(false);

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
    <Link reloadDocument to={"/"}>
      <Logo scrolled={scrolled} className={isContactPage ? "contact-page" : ""}>
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
      </Logo>
    </Link>
  );
};

export default NavLogo;
