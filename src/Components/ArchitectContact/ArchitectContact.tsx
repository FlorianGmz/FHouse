import { ArchitectState } from "../../@types/types";
import { StyledContact } from "./StyledArchitectComponents";

interface ArchitectContactProps {
  architect: ArchitectState["architect"];
  $page: string;
}

const ArchitectContact: React.FC<ArchitectContactProps> = ({
  architect,
  $page,
}) => {
  const { firstName, lastName, mail, phone } = architect;
  return (
    <StyledContact $page={$page}>
      <p>
        {firstName} {lastName}
      </p>
      <p style={{ textDecoration: "underline" }}>{mail}</p>
      <p>{phone}</p>
    </StyledContact>
  );
};

export default ArchitectContact;
