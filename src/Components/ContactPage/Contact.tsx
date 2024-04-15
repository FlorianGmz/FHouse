import React from "react";
import data from "../../../data/data.json";
import IntroductionText from "../../ui/IntroductionText";
import styled from "styled-components";
import StyledImg from "../../ui/StyledImg";

const StyledText = styled.p`
  margin-left: 9rem;
  font-size: 3rem;
`;

const Contact = () => {
  const { introductionText, location, mainImage } = data.contact;
  return (
    <div>
      <IntroductionText page="contact">{introductionText}</IntroductionText>
      <StyledText>{location}</StyledText>
      <StyledImg src={mainImage} page="contact" />
    </div>
  );
};

export default Contact;
