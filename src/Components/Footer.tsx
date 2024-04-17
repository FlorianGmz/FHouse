import styled from "styled-components";
import ContactRow from "./ContactRow";
import { useLocation } from "react-router-dom";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 5rem;
  background-color: black;
  color: white;
  z-index: 1 !important;
  position: fixed !important;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  return (
    <StyledFooter>
      <div>
        <div>Logo</div>
        <span>Slogan</span>
      </div>
      {!isContactPage && <ContactRow page="*" />}
    </StyledFooter>
  );
};

export default Footer;
