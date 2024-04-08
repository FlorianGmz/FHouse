import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledMainContainer = styled.main`
  position: relative;
  z-index: 2;
  background: white;
  overflow: hidden;
  margin-bottom: 580px;
  display: inline-block;
  width: 100%;
`;

const AppLayout = () => {
  return (
    <div>
      <Header />
      <StyledMainContainer>
        <Outlet />
      </StyledMainContainer>
      <Footer />
    </div>
  );
};

export default AppLayout;
