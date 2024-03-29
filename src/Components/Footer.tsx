import styled from "styled-components";
import architectData from "../data/architects.json";
import ArchitectContact from "./ArchitectContact";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 5rem;
  background-color: yellow;
`;

const ContactRow = styled.div`
  display: flex;
  gap: 2rem;
`;

export interface ArchitectState {
  architect: {
    firstName: string;
    lastName: string;
    mail: string;
    phone: string;
  };
}

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <div>Logo</div>
        <span>Slogan</span>
      </div>
      <ContactRow>
        {architectData.map((architect) => (
          <ArchitectContact architect={architect} />
        ))}
      </ContactRow>
    </StyledFooter>
  );
};

export default Footer;
