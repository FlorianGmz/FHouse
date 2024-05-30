import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Logo,
  StyledFLogo,
  StyledHLogo,
  StyledLink,
  StyledLogoLetter,
} from "./StyledLogoComponents";

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
