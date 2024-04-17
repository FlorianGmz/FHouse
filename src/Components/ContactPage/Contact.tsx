import data from "../../../data/data.json";
import IntroductionText from "../../ui/IntroductionText";
import styled from "styled-components";
import StyledImg from "../../ui/StyledImg";
import ContactRow from "../ContactRow";

const ContactSection = styled.div`
  color: white;
`;

const StyledText = styled.p`
  margin-left: 9rem;
  font-size: 3rem;
`;

const Contact = () => {
  const { introductionText, location, mainImage } = data.contact;

  return (
    <ContactSection>
      <IntroductionText page="contact">{introductionText}</IntroductionText>
      <StyledText>{location}</StyledText>
      <ContactRow page="contact" />
      <StyledImg src={mainImage} page="contact" />
    </ContactSection>
  );
};

export default Contact;