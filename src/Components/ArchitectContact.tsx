import styled from "styled-components";
import { ArchitectState } from "./Footer";

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ArchitectContact: React.FC<ArchitectState> = ({ architect }) => {
  const { firstName, lastName, mail, phone } = architect;
  return (
    <StyledContact>
      <p>
        {firstName} {lastName}
      </p>
      <p>{mail}</p>
      <p>{phone}</p>
    </StyledContact>
  );
};

export default ArchitectContact;
