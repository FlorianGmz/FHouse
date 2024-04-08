import styled from "styled-components";
import data from "../../data/data.json";
import ArchitectContact from "./ArchitectContact";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 5rem;
  background-color: yellow;
  color: black;
  z-index: 1 !important;
  position: fixed !important;
  bottom: 0;
  width: 100%;
`;

const ContactRow = styled.div`
  display: flex;
  gap: 2rem;
`;

const Footer = () => {
  const architectData = data.architects;
  return (
    <StyledFooter>
      <div>
        <div>Logo</div>
        <span>Slogan</span>
      </div>
      <ContactRow>
        {architectData.map((architect) => (
          <ArchitectContact key={architect.id} architect={architect} />
        ))}
      </ContactRow>
    </StyledFooter>
  );
};

export default Footer;
