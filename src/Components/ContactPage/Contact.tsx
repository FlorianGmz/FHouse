import IntroductionText from "../../ui/IntroductionText";
import styled from "styled-components";
import StyledImg from "../../ui/StyledImg";
import ContactRow from "../ContactRow";
import { useLoaderData } from "react-router-dom";
import { contactState } from "../../@types/types";

const ContactSection = styled.div`
  color: white;
`;

const StyledText = styled.p`
  margin-left: 100px;
  font-size: 2.2rem;
`;

const Contact = () => {
  const { introduction, location, mainImage } = useLoaderData() as contactState;

  return (
    <ContactSection>
      <div data-aos="fade-up" data-aos-duration="1000">
        <IntroductionText page="contact">{introduction}</IntroductionText>
        <StyledText>{location}</StyledText>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <ContactRow page="contact" />
      </div>
      <StyledImg src={mainImage} page="contact" />
    </ContactSection>
  );
};

export default Contact;
