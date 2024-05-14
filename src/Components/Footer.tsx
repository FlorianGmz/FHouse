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
  height: 40vh;
  padding: 100px 100px;
`;

const ReservedFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 100px;
  &.left {
    align-items: flex-start;
  }
  &.right {
    align-items: flex-end;
  }
`;

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  return (
    <StyledFooter>
      <ReservedFooter className="left">
        <div>
          <div>Fh</div>
          <span>At home with nature.</span>
        </div>
        <div>© Copyright 2024 FAROhouse.</div>
      </ReservedFooter>
      <ReservedFooter className="right">
        {!isContactPage && <ContactRow page="*" />}
        <div>All rights reserved.</div>
      </ReservedFooter>
    </StyledFooter>
  );
};

export default Footer;
