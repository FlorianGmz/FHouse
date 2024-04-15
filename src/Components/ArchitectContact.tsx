import styled from "styled-components";
import { architectState } from "../@types/types";

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ArchitectContact: React.FC<architectState> = ({ architect }) => {
  const { firstName, lastName, mail, phone } = architect;
  return (
    <StyledContact>
      <p>
        {firstName} {lastName}
      </p>
      <p style={{ textDecoration: "underline" }}>{mail}</p>
      <p>{phone}</p>
    </StyledContact>
  );
};

export default ArchitectContact;
