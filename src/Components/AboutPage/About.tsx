import "react-slideshow-image/dist/styles.css";
// import data from "../../../data/data.json";
import IntroductionText from "../../ui/IntroductionText";
import StyledImg from "../../ui/StyledImg";
import styled from "styled-components";
import Slideshow from "../Slideshow";
import { getAbout } from "../../services/apiFaliHouse";
import { useLoaderData } from "react-router-dom";
import { aboutState } from "../../@types/types";

const MainSection = styled.div`
  /* padding: 0 90px; */
`;

const TextDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 100px;
  padding: 250px 20vw;
`;

const Text = styled.p`
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
    text-align: center;
    margin: 0 auto;
    padding-bottom: 200px;
    font-size: 3.5rem;
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
        {introduction}
      </IntroductionText>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="350"
        data-aos-offset="-500"
      >
        <Slideshow slideshow={slideshow} />
      </div>
      <MainSection>
        <TextDiv>
          <div data-aos="fade-up" data-aos-duration="1000">
            <Text className="first">{firstText}</Text>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <Text
              data-aos="fade-up"
              data-aos-duration="1000"
              className="second"
            >
              {secondText}
            </Text>
          </div>
        </TextDiv>
        <StyledImg
          page="aboutMain"
          src={mainImage}
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <div data-aos="fade-up" data-aos-duration="1000">
          <Text className="third">{thirdText}</Text>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Text className="conclusion">
            <pre>{conclusionText}</pre>
          </Text>
        </div>
        <StyledImg
          page="aboutFinal"
          src={finalImage}
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </MainSection>
    </>
  );
};

export async function loader() {
  const aboutData = await getAbout();
  return aboutData;
}

export default About;
