import NavBar from "./NavBar";
import Caroussel from "./Caroussel";
import { useLoaderData } from "react-router-dom";
import { homeDataState } from "../@types/types";
import styled from "styled-components";
import Slideshow from "./Slideshow";
import IntroductionText from "../ui/IntroductionText";
import StyledHeader from "../ui/StyledHeader";

const StyledTitle = styled.h3`
  width: 1200px;
  padding: 13rem 20vw 3rem;
  line-height: 5rem;
  font-size: 3.5rem;
  font-weight: 400;
  @media only screen and (max-width: 600px) {
    width: 100vw;
    line-height: 3rem;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 100px 50px;
  }
`;

const StyledText = styled.h4`
  width: 1200px;
  padding: 0rem 20vw 13rem;
  line-height: 3rem;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Home = () => {
  const data = useLoaderData() as homeDataState;
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
