import { useState } from "react";
import styled from "styled-components";
import NavLogo from "./NavLogo";
import NavIcon from "./NavIcon";
import NavList from "./NavList";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
`;

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <>
      <StyledHeader className={navIsOpen ? "clicked" : ""}>
        <NavLogo navIsOpen={navIsOpen} />
        <NavIcon isOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      </StyledHeader>
      <NavList navIsOpen={navIsOpen} />
    </>
  );
};

export default Header;
