import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import NavLogo from "./Header/NavLogo";
import NavIcon from "./Header/NavIcon";
import NavList from "./Header/NavList";

const StyledMainContainer = styled.main`
  position: relative;
  z-index: 2;
  background-color: white;
  overflow: hidden;
  margin-bottom: 560px;
  display: inline-block;
  width: 100vw;
  @media only screen and (max-width: 770px) {
    margin-bottom: 468px;
  }
  &.contact-page {
    background-color: black;
    color: white;
    @media only screen and (max-width: 770px) {
      margin-bottom: 150px;
    }
  }
`;

const AppLayout = () => {
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
