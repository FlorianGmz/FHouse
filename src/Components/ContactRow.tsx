import React from "react";
import ArchitectContact from "./ArchitectContact";
import data from "../../data/data.json";
import styled, { css } from "styled-components";

const Row = styled.div<{ page: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 80px;
  line-height: 1.5rem;
  font-size: 1rem;
  @media only screen and (max-width: 770px) {
    gap: 30px;
    flex-direction: column;
    align-items: flex-start;
    font-size: 0.8rem;
  }
  ${(props) =>
    props?.page === "contact" &&
    css`
      width: 80vw;
      float: right;
      font-size: 1.2rem;
      line-height: 1.8rem;
      margin-top: 300px;
      /* background-color: black; */
      margin-bottom: 100px;
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
