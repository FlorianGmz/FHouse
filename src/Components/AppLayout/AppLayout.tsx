import { Outlet, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { StyledMainContainer } from "./StyledAppComponents";
import Footer from "../Footer/Footer";
import NavLogo from "../Header/NavLogo/NavLogo";
import NavIcon from "../Header/NavIcon/NavIcon";
import NavList from "../Header/NavList/NavList";

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <NavLogo navIsOpen={navIsOpen} />
      <NavIcon isOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      {navIsOpen && <NavList navIsOpen={navIsOpen} />}
      <StyledMainContainer className={isContactPage ? "contact-page" : ""}>
        <Outlet />
      </StyledMainContainer>
      <Footer />
    </div>
  );
};

export default AppLayout;
