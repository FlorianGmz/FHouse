import React from "react";
import ArchitectContact from "./ArchitectContact";
import data from "../../data/data.json";
import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  gap: 2rem;
  ${(props?) =>
    props.page === "contact" &&
    css`
      width: 80vw;
      float: right;
      margin-top: 200px;
      margin-bottom: 80px;
    `}
`;

interface ContactRowProps {
  page: string;
}

const ContactRow: React.FC<ContactRowProps> = ({ page }) => {
  const architectData = data.architects;
  return (
    <Row page={page}>
      {architectData.map((architect) => (
        <ArchitectContact
          key={architect.id}
          architect={architect}
          page={page}
        />
      ))}
    </Row>
  );
};

export default ContactRow;
