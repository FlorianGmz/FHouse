import ContactRow from "../ContactRow/ContactRow";
import { useLocation } from "react-router-dom";
import { ArchitectState } from "../../@types/types";
import { StyledFooter, FooterRow, FooterText } from "./StyledFooterComponents";
import data from "../../../public/data/data.json";

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const architectsData = data.architects as ArchitectState["architect"][];
  return (
    <StyledFooter $isContactPage={isContactPage}>
      {!isContactPage && (
        <FooterRow className="top">
          <div>
            <FooterText className="logo">Fh</FooterText>
            <FooterText className="title">At home with nature.</FooterText>
          </div>
          <div>
            <ContactRow page="*" architectsData={architectsData} />
          </div>
        </FooterRow>
      )}
      <FooterRow className="bottom">
        <FooterText className="copyright">
          © Copyright 2024 FAROhouse.
        </FooterText>
        <FooterText className="copyright">All rights reserved.</FooterText>
      </FooterRow>
    </StyledFooter>
  );
};

export default Footer;
