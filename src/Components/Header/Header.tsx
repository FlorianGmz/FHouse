import { useState } from "react";
import NavLogo from "./NavLogo/NavLogo";
import NavIcon from "./NavIcon/NavIcon";
import NavList from "./NavList/NavList";
import { StyledHeader } from "./StyledHeaderComponents";

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
