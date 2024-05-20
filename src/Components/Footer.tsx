import styled from "styled-components";
import ContactRow from "./ContactRow";
import { useLocation } from "react-router-dom";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  z-index: 1 !important;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 60vh;
  padding: 100px 100px;
  @media only screen and (max-width: 770px) {
    flex-direction: column;
    height: 50vh;
    padding: 100px 50px;
  }
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 50px;
  gap: 100px;
  &.left {
    align-items: flex-start;
  }
  &.right {
    align-items: flex-end;
    @media only screen and (max-width: 770px) {
      align-items: flex-start;
    }
  }
`;

const FooterText = styled.div`
  &.logo {
    font-size: 7rem;
    font-weight: 500;
    @media only screen and (max-width: 770px) {
    }
  }
  &.title {
    font-size: 2rem;
    @media only screen and (max-width: 770px) {
      font-size: 1rem;
    }
  }
  &.bottom {
    color: #505050;
    font-size: 0.9rem;
    @media only screen and (max-width: 770px) {
      font-size: 0.5rem;
    }
  }
`;

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  return (
    <StyledFooter>
      <FooterRow className="left">
        {!isContactPage && (
          <div>
            <FooterText className="logo">Fh</FooterText>
            <FooterText className="title">At home with nature.</FooterText>
          </div>
        )}
        <FooterText className="bottom">© Copyright 2024 FAROhouse.</FooterText>
      </FooterRow>
      <FooterRow className="right">
        {!isContactPage && <ContactRow page="*" />}
        <FooterText className="bottom">All rights reserved.</FooterText>
      </FooterRow>
    </StyledFooter>
  );
};

export default Footer;
