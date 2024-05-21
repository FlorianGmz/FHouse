import styled from "styled-components";
import ContactRow from "./ContactRow";
import { useLocation } from "react-router-dom";

const StyledFooter = styled.footer`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
  color: white;
  z-index: 1 !important;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 560px;
  padding: 100px 100px;
  @media only screen and (max-width: 770px) {
    flex-direction: column;
    padding: 50px;
    height: 468px;
    gap: 50px;
  }
`;

const FooterRow = styled.div`
  display: flex;
  &.top {
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 770px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &.bottom {
    justify-content: space-between;
    align-items: flex-end;
    @media only screen and (max-width: 770px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

const FooterText = styled.div`
  &.logo {
    font-size: 7rem;
    font-weight: 500;
    @media only screen and (max-width: 770px) {
      font-size: 3.2rem;
    }
  }
  &.title {
    font-size: 2rem;
    @media only screen and (max-width: 770px) {
      font-size: 1.2rem;
      padding-bottom: 30px;
    }
  }
  &.copyright {
    color: #505050;
    font-size: 0.9rem;
    @media only screen and (max-width: 770px) {
      font-size: 0.7rem;
    }
  }
`;

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  return (
    <StyledFooter>
      {!isContactPage && (
        <FooterRow className="top">
          <div>
            <FooterText className="logo">Fh</FooterText>
            <FooterText className="title">At home with nature.</FooterText>
          </div>
          <div>
            <ContactRow page="*" />
          </div>
        </FooterRow>
      )}
      <FooterRow className="bottom">
        <FooterText className="copyright">
          © Copyright 2024 FAROhouse.
        </FooterText>
        <FooterText className="copyright">All rights reserved.</FooterText>
      </FooterRow>
    </StyledFooter>
  );
};

export default Footer;
