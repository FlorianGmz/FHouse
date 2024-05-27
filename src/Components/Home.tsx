import NavBar from "./NavBar";
import Caroussel from "./Carousel/Carousel";
import { useLoaderData } from "react-router-dom";
import { HomeDataState } from "../@types/types";
import styled from "styled-components";
import Slideshow from "./Slideshow";
import IntroductionText from "../ui/IntroductionText";
import StyledHeader from "../ui/StyledHeader";

const StyledTitle = styled.h3`
  max-width: 1400px;
  padding: 13rem 20vw 3rem;
  line-height: 5rem;
  font-size: 3.5rem;
  font-weight: 400;
  @media only screen and (max-width: 770px) {
    width: auto;
    line-height: 3rem;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 100px 50px 50px;
  }
`;

const StyledText = styled.h4`
  max-width: 1400px;
  padding: 0rem 20vw 13rem;
  line-height: 3rem;
  font-size: 1.5rem;
  font-weight: 400;
  @media only screen and (max-width: 770px) {
    width: auto;
    line-height: 2rem;
    font-size: 1.2rem;
    padding: 0 50px 100px;
  }
`;

const Home = () => {
  const data = useLoaderData() as HomeDataState;
  const { introduction, firstText, secondText, slideshow } = data.homeData;
  const projects = data.projectsData.items;
  return (
    <>
      <StyledHeader page="home" data-aos="fade-up" data-aos-duration="1000">
        <IntroductionText page="home">
          <pre>{introduction}</pre>
        </IntroductionText>
        <NavBar position="top">Projects</NavBar>
      </StyledHeader>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="350"
        data-aos-offset="-500"
      >
        <Slideshow slideshow={slideshow} />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <StyledTitle>{firstText}</StyledTitle>
        <StyledText>{secondText}</StyledText>
      </div>
      <Caroussel items={projects} />
      <NavBar position="bottom">Projects</NavBar>
    </>
  );
};

export default Home;
