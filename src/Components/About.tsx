import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import data from "../../data/data.json";
import { aboutState } from "../@types/types";
import IntroductionText from "../ui/IntroductionText";
import styled from "styled-components";

const SlideshowSection = styled.section``;

const SlideDiv = styled.div`
  text-align: right;
`;

const StyledImg = styled.img`
  &.slide {
    width: 80vw;
    height: 90vh;
    object-fit: cover;
    object-position: center;
  }
  &.main {
    width: 80vw;
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }
  &.final {
    width: 100vw;
    height: 100vh;
    padding-bottom: 2rem;
  }
`;

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
  const aboutData: aboutState = data.about;

  const slideProperties = {
    duration: 5000,
    autoplay: true,
    transitionDuration: 1000,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

  const {
    introductionText,
    firstText,
    secondText,
    thirdText,
    conclusionText,
    slideshow,
    mainImage,
    finalImage,
  } = aboutData;

  return (
    <>
      <IntroductionText page="about">{introductionText}</IntroductionText>
      <img></img>
      <SlideshowSection>
        <Fade {...slideProperties}>
          {slideshow.map((slide) => (
            <SlideDiv>
              <StyledImg className="slide" src={slide} />
            </SlideDiv>
          ))}
        </Fade>
      </SlideshowSection>
      <MainSection>
        <TextDiv>
          <Text className="first">{firstText}</Text>
          <Text className="second">{secondText}</Text>
        </TextDiv>
        <StyledImg className="main" src={mainImage} />
        <Text className="third">{thirdText}</Text>
        <Text className="conclusion">{conclusionText}</Text>
        <StyledImg className="final" src={finalImage} />
      </MainSection>
    </>
  );
};

export default About;
