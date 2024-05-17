import styled, { css } from "styled-components";
import { architectState } from "../@types/types";

const StyledContact = styled.div<{ page: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${(props) =>
    props?.page === "contact" &&
    css`
      align-items: flex-start;
    `}
`;

interface ArchitectContactProps {
  architect: architectState["architect"];
  page: string;
}

const ArchitectContact: React.FC<ArchitectContactProps> = ({
  architect,
  page,
}) => {
  const { firstName, lastName, mail, phone } = architect;
  return (
    <StyledContact page={page}>
      <p>
        {firstName} {lastName}
      </p>
      <p style={{ textDecoration: "underline" }}>{mail}</p>
      <p>{phone}</p>
    </StyledContact>
  );
};

export default ArchitectContact;
