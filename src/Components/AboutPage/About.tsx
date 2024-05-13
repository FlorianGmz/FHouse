import "react-slideshow-image/dist/styles.css";
import IntroductionText from "../../ui/IntroductionText";
import StyledImg from "../../ui/StyledImg";
import styled from "styled-components";
import Slideshow from "../Slideshow";
import { useLoaderData } from "react-router-dom";
import { aboutState } from "../../@types/types";

const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  padding: 250px 20vw;
`;

const TextDiv = styled.div`
  &.first {
    font-size: 3.4rem;
    font-weight: 500;
    width: 45vw;
  }
  &.second {
    font-size: 1.8rem;
    font-weight: 500;
    align-self: flex-end;
    line-height: 2.5rem;
    margin-left: 15rem;
  }
  &.third {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.5rem;
    padding: 200px 20vw;
    margin-left: 15rem;
  }
  &.conclusion {
    width: 50vw;
    font-weight: 500;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 200px;
    font-size: 3.3rem;
  }
`;

const About = () => {
  const aboutData = useLoaderData() as aboutState;
  const {
    introduction,
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
      <IntroductionText
        data-aos="fade-up"
        data-aos-duration="1000"
        page="about"
      >
        <pre>{introduction}</pre>
      </IntroductionText>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="350"
        data-aos-offset="-500"
      >
        <Slideshow slideshow={slideshow} />
      </div>
      <StyledDiv>
        <TextDiv data-aos="fade-up" data-aos-duration="1000" className="first">
          <p>{firstText}</p>
        </TextDiv>
        <TextDiv data-aos="fade-up" data-aos-duration="1000" className="second">
          <p>{secondText}</p>
        </TextDiv>
      </StyledDiv>
      <StyledImg
        data-aos="fade-up"
        data-aos-duration="1000"
        page="aboutMain"
        src={mainImage}
      />
      <TextDiv data-aos="fade-up" data-aos-duration="1000" className="third">
        <p>{thirdText}</p>
      </TextDiv>
      <TextDiv
        data-aos="fade-up"
        data-aos-duration="1000"
        className="conclusion"
      >
        <p>{conclusionText}</p>
      </TextDiv>
      <StyledImg
        data-aos="fade-up"
        data-aos-duration="1000"
        page="aboutFinal"
        src={finalImage}
      />
    </>
  );
};

export default About;
