import React from "react";
import { ArchitectState } from "../../@types/types";

import { Row } from "./StyledRowComponents";
import ArchitectContact from "../ArchitectContact/ArchitectContact";

interface ContactRowProps {
  page: string;
  architectsData: ArchitectState["architect"][];
}

const ContactRow: React.FC<ContactRowProps> = ({ page, architectsData }) => {
  return (
    <Row page={page}>
      {architectsData.map((architect) => (
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
