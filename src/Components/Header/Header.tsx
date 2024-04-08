import { useState } from "react";
import styled, { keyframes } from "styled-components";
import NavLogo from "./NavLogo";
import NavMenuIcon from "./NavIcon";
import NavList from "./NavList";

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

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <>
      <StyledHeader className={navIsOpen ? "clicked" : ""}>
        <NavLogo navIsOpen={navIsOpen} />
        <NavMenuIcon isOpen={navIsOpen} setIsOpen={setNavIsOpen} />
      </StyledHeader>
      <NavList navIsOpen={navIsOpen} setIsOpen={setNavIsOpen} />
    </>
  );
};

export default Header;
