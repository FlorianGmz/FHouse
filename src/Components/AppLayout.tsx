import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledMainContainer = styled.main`
  position: relative;
  z-index: 2;
  background-color: white;
  overflow: hidden;
  margin-bottom: 270px;
  display: inline-block;
  width: 100%;
  &.contact-page {
    background-color: black;
  }
`;
console.log(window.location.pathname);
const AppLayout = () => {
  const [];
  const currentPathname = window.location.pathname;
  return (
    <div>
      <Header />
      <StyledMainContainer
        className={currentPathname === "/contact" ? "contact-page" : ""}
      >
        <Outlet />
      </StyledMainContainer>
      <Footer />
    </div>
  );
};

export default AppLayout;
