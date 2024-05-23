import "react-slideshow-image/dist/styles.css";
import IntroductionText from "../../ui/IntroductionText";
import StyledImg from "../../ui/StyledImg";
import styled from "styled-components";
import { useLoaderData } from "react-router-dom";
import { aboutState } from "../../@types/types";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  padding: 250px 20vw;
  @media only screen and (max-width: 770px) {
    padding: 50px;
    gap: 30px;
  }
`;

const TextDiv = styled.h4`
  &.first {
    font-size: 3.4rem;
    font-weight: 500;
    width: 45vw;
    @media only screen and (max-width: 770px) {
      width: 100%;
      font-size: 1.5rem;
      line-height: 2.2rem;
    }
  }
  &.second {
    font-size: 1.8rem;
    font-weight: 500;
    align-self: flex-end;
    line-height: 2.5rem;
    margin-left: 15rem;
    @media only screen and (max-width: 770px) {
      width: 100%;
      font-size: 1.1rem;
      line-height: 2rem;
    }
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
    firstImage,
    mainImage,
    finalImage,
  } = aboutData;

  return (
    <div data-aos-once="true">
      <section>
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
          <StyledImg page="about" src={firstImage} />
        </div>
      </section>
      <section>
        <StyledDiv data-aos="fade-up" data-aos-duration="1000">
          <TextDiv className="first">{firstText}</TextDiv>
          <TextDiv className="second">{secondText}</TextDiv>
        </StyledDiv>
        <div data-aos="fade-up" data-aos-duration="1000">
          <StyledImg page="aboutMain" src={mainImage} />
        </div>
      </section>
      <section>
        <TextDiv data-aos="fade-up" data-aos-duration="1000" className="third">
          {thirdText}
        </TextDiv>
        <TextDiv
          data-aos="fade-up"
          data-aos-duration="1000"
          className="conclusion"
        >
          {conclusionText}
        </TextDiv>
        <div data-aos="fade-up" data-aos-duration="1000">
          <StyledImg page="aboutFinal" src={finalImage} />
        </div>
      </section>
    </div>
  );
};

export default About;
