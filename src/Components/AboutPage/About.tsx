import "react-slideshow-image/dist/styles.css";
import data from "../../../data/data.json";
import IntroductionText from "../../ui/IntroductionText";
import StyledImg from "../../ui/StyledImg";
import styled from "styled-components";
import Slideshow from "../Slideshow";

const MainSection = styled.div`
  /* padding: 0 90px; */
`;

const TextDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10rem;
  padding: 20rem 20vw;
`;

const Text = styled.p`
  &.first {
    font-size: 6rem;
    width: 45vw;
  }
  &.second {
    font-size: 3rem;
    align-self: flex-end;
    margin-left: 20rem;
  }
  &.third {
    font-size: 3rem;
    width: 110rem;
    padding: 20rem;
    margin-left: 30rem;
  }
  &.conclusion {
    padding: 0rem 20rem 20rem 20rem;
    font-size: 5rem;
  }
`;

const About = () => {
  const {
    introductionText,
    firstText,
    secondText,
    thirdText,
    conclusionText,
    slideshow,
    mainImage,
    finalImage,
  } = data.about;

  return (
    <>
      <IntroductionText page="about">{introductionText}</IntroductionText>
      <Slideshow slideshow={slideshow} />
      <MainSection>
        <TextDiv>
          <Text className="first">{firstText}</Text>
          <Text className="second">{secondText}</Text>
        </TextDiv>
        <StyledImg page="aboutMain" src={mainImage} />
        <Text className="third">{thirdText}</Text>
        <Text className="conclusion">{conclusionText}</Text>
        <StyledImg page="aboutFinal" src={finalImage} />
      </MainSection>
    </>
  );
};

export default About;
