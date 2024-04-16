import styled from "styled-components";
import ContactRow from "./ContactRow";

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
  return (
    <StyledFooter>
      <div>
        <div>Logo</div>
        <span>Slogan</span>
      </div>
      <ContactRow />
    </StyledFooter>
  );
};

export default Footer;
