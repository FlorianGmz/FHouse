import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { DisclaimerMessage, StyledMainContainer } from "./StyledAppComponents";
import Footer from "../Footer/Footer";
import NavLogo from "../Header/NavLogo/NavLogo";
import NavIcon from "../Header/NavIcon/NavIcon";
import NavList from "../Header/NavList/NavList";

const AppLayout = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <DisclaimerMessage>
        ⚠️ Disclaimer: This website is for demonstration purposes only. All
        content, including images, is copyright-free and used for illustrative
        purposes. This site does not represent a real business or service.
      </DisclaimerMessage>
      <div>
        <NavLogo navIsOpen={navIsOpen} />
        <NavIcon isOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
        {navIsOpen && <NavList navIsOpen={navIsOpen} />}
        <StyledMainContainer className={isContactPage ? "contact-page" : ""}>
          <Outlet />
        </StyledMainContainer>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
